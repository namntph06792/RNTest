import React, { useEffect } from 'react';
import { ActivityIndicator, View, Image } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import styles from '../style/styles';

export default function Splash(props) {

    const resetAction = StackActions.reset({
        index: 0,
        actions: [ NavigationActions.navigate({ routeName: 'Home' }) ]
    });

    useEffect(() => {
        setTimeout(() => {
                props.navigation.dispatch(resetAction)
            },5 * 1000);
    });

    return (
        <View style={styles.splash_container}>
            <Image source={require('../assets/react_logo.png')}/>
            <ActivityIndicator size='large' />
        </View>
    );
}

