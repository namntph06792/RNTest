import React, { } from 'react';
import { Alert } from 'react-native';
import { Text, ListItem, Thumbnail } from 'native-base';
import Swipeout from 'react-native-swipeout';
import styles from '../style/styles';
import { deleteDataFromFirebase } from '../controllers/firebase_dao';

export default function InvoiceItem(props) {

    //Navigate
    toDetailPage = (_name, _content, _price) => {
        props.prop.navigation.navigate('Detail', {
            Invoice: {
                name: _name,
                content: _content,
                price: _price
            }
        })
    }

    toEditPage = (_id,_name,_content,_price) => {
        props.prop.navigation.navigate('Control', {
            Invoice: {
                id:_id,
                name: _name,
                content: _content,
                price: _price
            },
            action : 1
        })
    }

    //Swipeout Setting
    const swipeOutConfig = {
        autoClose: true,
        onOpen: (sectionID, rowId, direction) => {},
        backgroundColor: '#ffffff',
        right: [{
            onPress: () => {
                Alert.alert(
                    'Confirmation',
                    'Are you sure to edit this item ?',
                    [
                        {
                            text: 'Cancel',
                            style: 'cancel',
                        },
                        {
                            text: 'OK',
                            onPress: () => {
                                toEditPage(props.dat.id,props.dat.name, props.dat.content, props.dat.price);
                            }
                        }
                    ],
                    { cancelable: false },
                )
            },
            text: 'Edit',
            type: 'edit'
        }, {
            onPress: () => {
                Alert.alert(
                    'Confirmation',
                    'Are you sure to delete this item ?',
                    [
                        {
                            text: 'Cancel',
                            style: 'cancel',
                        },
                        {
                            text: 'OK',
                            onPress: () => deleteDataFromFirebase(props.dat.id)
                        }
                    ],
                    { cancelable: false }
                )
            },
            text: 'Delete',
            type: 'delete'
        }],
        rowId: props.index,
        sectionID: 1
    }


    return (
        <Swipeout {...swipeOutConfig}>
            <ListItem thumbnail onPress={() => toDetailPage(props.dat.name, props.dat.content, props.dat.price)} style={styles.list_item}>
                <Thumbnail square source={require('../assets/item.png')} style={styles.thumbnail} />
                <Text style={styles.text_name}>{props.dat.name}</Text>
            </ListItem>
        </Swipeout>
    );
}
