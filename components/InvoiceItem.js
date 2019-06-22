import React, { useState } from 'react';
import { Alert } from 'react-native';
import { SwipeRow, Text, Icon, Button, ListItem, Thumbnail } from 'native-base';
import { firebaseApp } from '../config/firebase';

export default function InvoiceItem(props,nav) {

    this.component = [];

    deleteDataFromFirebase = (id) => {
        Alert.alert(
            'Confirmation !',
            'Do you sure to delete this invoice ?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                }, {
                    text: 'OK',
                    onPress: () => firebaseApp.database().ref('invoices/' + id).remove()
                }
            ]
        )
    }

    toDetailPage = () => {
        props.nav.navigate('Detail', {
            name: props.dat.name,
            content: props.dat.content,
            price: props.dat.price
        })
    }

    return (
        <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            ref={(c) => { this.component[props.dat.id] = c }}
            onRowOpen={() => {
                if (this.selectedRow && this.selectedRow !== this.component[props.dat.id]) { this.selectedRow._root.closeRow(); }
                this.selectedRow = this.component[props.dat.id]
            }}
            body={
                <ListItem thumbnail onPress={() => toDetailPage()} style={{ padding: 10, margin: 5, flex: 1, height: '100%' }}>
                    <Thumbnail square source={require('../assets/react-native.png')} style={{ marginRight: 20 }} />
                    <Text style={{ color: 'blue', fontSize: 20, fontStyle: 'italic', fontWeight: 'bold' }}>{props.dat.name}</Text>
                </ListItem>
            }
            right={
                <Button danger onPress={() => this.deleteDataFromFirebase(props.dat.id)}>
                    <Icon active name="trash" />
                </Button>
            }
        />
    );
}
