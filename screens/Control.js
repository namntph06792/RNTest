import React, { useState } from 'react';
import { View, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard, Text, Alert } from 'react-native';
import { Toast } from 'native-base';
import styles from '../style/styles';
import { saveDataToFirebase, updateFirebaseData } from '../controllers/firebase_dao';

export default function Add(props) {

    action = props.navigation.getParam('action', 'NO_ACTION');
    invoice = props.navigation.getParam('Invoice', 'NO_NAME');

    const [name, setName] = useState(action === 0 ? '' : invoice.name);
    const [content, setContent] = useState(action === 0 ? '' : invoice.content);
    const [price, setPrice] = useState(action === 0 ? '' : invoice.price);

    //Validate data from input form
    validatePostRegister = (a) => {
        space = /^\s*$/;
        regP = /\d+/;
        //position: top|bottom , type: warning|success|danger , 
        if (space.test(name)) {
            Toast.show({
                text: 'Name can not be empty !',
                textStyle: { color: '#e9eaa8'},
                buttonText: 'Got it',
                buttonTextStyle: { color: '#cececa' },
                buttonStyle: { backgroundColor: '#8bc692' },
                duration: 2000,
                position: 'top',
                type: 'danger'
            })
        } else if (space.test(content)) {
            Toast.show({
                text: 'Content can not be empty !',
                textStyle: { color: '#e9eaa8' },
                buttonText: 'Got it',
                buttonTextStyle: { color: '#cececa' },
                buttonStyle: { backgroundColor: '#8bc692' },
                duration: 2000,
                position: 'top',
                type: 'danger'
            })
        } else if (space.test(price) || !regP.test(price)) {
            Toast.show({
                text: 'Price can not be empty and must be number type !',
                textStyle: { color: '#e9eaa8' },
                buttonText: 'Got it',
                buttonTextStyle: { color: '#cececa' },
                buttonStyle: { backgroundColor: '#8bc692' },
                duration: 2000,
                position: 'top',
                type: 'danger'
            })
        } else {
            if(a === 0){
                saveDataToFirebase(name,content,price,props);
            } else if(a === 1){
                updateFirebaseData(invoice.id,name,content,price,props);
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
                        <TouchableOpacity style={styles.row_btn_submit} onPress={() => this.validatePostRegister(action)}>
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
                        <TouchableOpacity style={styles.row_btn_submit} onPress={() => this.validatePostRegister(action)}>
                            <Text style={styles.row_btn_submit_text}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
