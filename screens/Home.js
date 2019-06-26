import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from '../style/styles';

export default function Home(props) {

    return (
        <View style={styles.home_container}>
            <View style={styles.row_menu}>
                <View style={styles.col_menu}>
                    <TouchableOpacity style={styles.row_item_one} onPress={() => props.navigation.navigate('List')}>
                        <Image source={require('../assets/dashboard.png')} style={styles.row_image} />
                        <Text style={styles.row_text}>Dashboard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row_item_two} onPress={() => alert('This function not ready yet !')}>
                        <Image source={require('../assets/new.png')} style={styles.row_image} />
                        <Text style={styles.row_text}>News</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row_item_three} onPress={() => alert('This function not ready yet !')}>
                        <Image source={require('../assets/stat.png')} style={styles.row_image} />
                        <Text style={styles.row_text}>Statistical</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.col_menu}>
                    <TouchableOpacity style={styles.row_item_one} onPress={() => props.navigation.navigate('Control', { action: 0})}>
                        <Image source={require('../assets/add.png')} style={styles.row_image} />
                        <Text style={styles.row_text}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row_item_two} onPress={() => alert('This function not ready yet !')}>
                        <Image source={require('../assets/social.png')} style={styles.row_image} />
                        <Text style={styles.row_text}>Social</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row_item_three} onPress={() => alert('This function not ready yet !')}>
                        <Image source={require('../assets/setting.png')} style={styles.row_image} />
                        <Text style={styles.row_text}>Setting</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
