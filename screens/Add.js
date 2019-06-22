import React, { useState } from 'react';
import { View, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Keyboard, Text, Alert } from 'react-native';
import styles from '../style/styles';
import { firebaseApp } from '../config/firebase';

export default function Add(props) {

    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [price, setPrice] = useState('');

    //Firebase DAO
    saveDataToFirebase = () => {
        firebaseApp.database().ref('invoices/').push({
            name: name,
            content: content,
            price: price,
        }, function (error) {
            if (error) {
                // The write failed...
                alert('Something wrong happened ! We can not save your data')
            } else {
                // Data saved successfully!
                Alert.alert(
                    'Information',
                    'Save data successful !',
                    [
                        {
                            text: 'OK',
                            onPress: () => props.navigation.navigate('Home')
                        }
                    ]
                );

            }
        });
        this.resetState();
    }

    //Validate data from input form
    validatePostRegister = () => {
        space = /^\s*$/;
        regP = /\d+/;
        if (space.test(name)) {
            alert('Name can not be empty');
        } else if (space.test(content)) {
            alert('Content can not be empty');
        } else if (space.test(price) || !regP.test(price)) {
            alert('Price can not be empty and must be number type')
        } else {
            saveDataToFirebase();
        }
    }

    //Common function
    resetState = () => {
        setName('');
        setContent('');
        setPrice('');
    }

    return (
        <View style={styles.post_container}>
            <KeyboardAvoidingView behavior="padding" style={styles.post_container}>
                <TouchableWithoutFeedback
                    style={styles.post_container}
                    onPress={Keyboard.dismiss}>
                    <View style={styles.loginInfo}>
                        <TextInput
                            style={styles.input}
                            placeholder="Table name"
                            placeholderTextColor="#d9e3f0"
                            keyboardType="default"
                            returnKeyType="next"
                            autoCorrect={false}
                            onSubmitEditing={() => this.content.focus()}
                            onChangeText={(name) => { setName(name) }}
                            value={name}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Content"
                            placeholderTextColor="#d9e3f0"
                            keyboardType="default"
                            returnKeyType="next"
                            autoCorrect={false}
                            ref={input => (this.content = input)}
                            onSubmitEditing={() => this.price.focus()}
                            onChangeText={(content) => { setContent(content) }}
                            value={content}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Price"
                            placeholderTextColor="#d9e3f0"
                            keyboardType="numbers-and-punctuation"
                            returnKeyType="go"
                            autoCorrect={false}
                            ref={input => (this.price = input)}
                            onChangeText={(price) => { setPrice(price) }}
                            value={price}
                        />
                        <TouchableOpacity style={styles.btnSubmit} onPress={() => this.validatePostRegister()}>
                            <Text style={styles.textButtonSubmit}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    );
}
