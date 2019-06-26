import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import InvoiceItem from '../components/InvoiceItem';
import { firebaseApp } from '../config/firebase';
import styles from '../style/styles';

export default function List(props) {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchFirebaseData();
    })

    fetchFirebaseData = () => {
        firebaseApp.database().ref('invoices/').on('value', function (snapshot) {
            let array = [];
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                array.push({
                    id: childSnapshot.key,
                    name: childData.name,
                    content: childData.content,
                    price: childData.price,
                });
            });
            setData(array);
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
