import { Alert } from 'react-native';
import { firebaseApp } from '../config/firebase';

export const saveDataToFirebase = (_n, _c, _p, p) => {
    firebaseApp.database().ref('invoices/').push({
        name: _n,
        content: _c,
        price: _p,
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
                        p.navigation.navigate('Home');
                    }
                }]
            );
        }
    });
}

export const updateFirebaseData = (id,_n,_c,_p,p) => {
    firebaseApp.database().ref('invoices/' + id).set({
        name: _n,
        content: _c,
        price: _p,
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
                        p.navigation.navigate('List');
                    }
                }]
            );
        }
    });
}

export const deleteDataFromFirebase = (id) => {
    firebaseApp.database().ref('invoices/' + id).remove()
}