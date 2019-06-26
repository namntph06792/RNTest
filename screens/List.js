import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import InvoiceItem from '../components/InvoiceItem';
import { firebaseApp } from '../config/firebase';
import styles from '../style/styles';

export default function List(props) {
    
    const [isLoading, setLoading] = useState(true);

    let array = [];

    useEffect(() => {
        fetchFirebaseData();
    })

    const [data, setData] = useState(array);

    fetchFirebaseData = async() => {
        await firebaseApp.database().ref('invoices/').on('value', function (snapshot) {
            
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                array.push({
                    id: childSnapshot.key,
                    name: childData.name,
                    content: childData.content,
                    price: childData.price,
                });
            });
            setLoading(false);
        });
    }

    if (isLoading) {
        return (
            <View style={styles.listpost_container}>
                <ActivityIndicator size='large' />
            </View>
        );
    }
    return (
        <View style={styles.list_container}>
            <FlatList
                style={{ flex: 1 }}
                data={data}
                renderItem={({ item }) => <InvoiceItem dat={item} prop={props} />}
                keyExtractor={(item, index) => item.id} />
        </View>
    );
}
