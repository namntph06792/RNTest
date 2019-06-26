import React, { useState } from 'react';
import { View, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Keyboard, Text, Alert } from 'react-native';
import styles from '../style/styles';
import { firebaseApp } from '../config/firebase';

export default function Add(props) {

    action = props.navigation.getParam('action', 'NO_ACTION');
    invoice = props.navigation.getParam('Invoice', 'NO_NAME');

    const [name, setName] = useState(action === 0 ? '' : invoice.name);
    const [content, setContent] = useState(action === 0 ? '' : invoice.content);
    const [price, setPrice] = useState(action === 0 ? '' : invoice.price);

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
                    [{
                            text: 'OK',
                            onPress: () => {
                                this.resetState();
                                props.navigation.navigate('Home');
                            }
                    }]
                );
            }
        });
    }

    updateFirebaseData = (id) => {
        firebaseApp.database().ref('invoices/' + id).set({
            name: name,
            content: content,
            price: price,
        }, function (error) {
            if (error) {
                // The write failed...
                alert('Something wrong happened ! We can not update your data')
            } else {
                // Data saved successfully!
                Alert.alert(
                    'Information',
                    'Update data successful !',
                    [{
                        text: 'OK',
                        onPress: () => {
                            this.resetState();
                            props.navigation.navigate('List');
                        }
                    }]
                );
            }
        });
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
            if(action === 0){
                saveDataToFirebase();
            } else if(action === 1){
                updateFirebaseData(invoice.id)
            }
        }
    }

    //Common function
    resetState = () => {
        setName('');
        setContent('');
        setPrice('');
    }

    if(action === 0){
        return (
            <View style={styles.add_container} onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior="padding" style={styles.add_container}>
                    <View style={styles.form_input}>
                        <TextInput
                            style={styles.row_input_first}
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
                            style={styles.row_input}
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
                            style={styles.row_input_last}
                            placeholder="Price"
                            placeholderTextColor="#d9e3f0"
                            keyboardType="numbers-and-punctuation"
                            returnKeyType="go"
                            autoCorrect={false}
                            ref={input => (this.price = input)}
                            onChangeText={(price) => { setPrice(price) }}
                            value={price}
                        />
                        <TouchableOpacity style={styles.row_btn_submit} onPress={() => this.validatePostRegister()}>
                            <Text style={styles.row_btn_submit_text}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    } else if (action === 1){
        return(
            <View style={styles.add_container} onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior="padding" style={styles.add_container}>
                    <View style={styles.form_input}>
                        <TextInput
                            style={styles.row_input_first}
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
                            style={styles.row_input}
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
                            style={styles.row_input_last}
                            placeholder="Price"
                            placeholderTextColor="#d9e3f0"
                            keyboardType="numbers-and-punctuation"
                            returnKeyType="go"
                            autoCorrect={false}
                            ref={input => (this.price = input)}
                            onChangeText={(price) => { setPrice(price) }}
                            value={price}
                        />
                        <TouchableOpacity style={styles.row_btn_submit} onPress={() => this.validatePostRegister()}>
                            <Text style={styles.row_btn_submit_text}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
