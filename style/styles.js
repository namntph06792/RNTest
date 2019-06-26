import { StyleSheet, Dimensions } from 'react-native';

const DeviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
    //Splash
    splash_container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    //Home
    home_container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ced5e0',
    },
    row_menu: {
        flexDirection: 'row',
    },
    col_menu: {
        marginRight: 20, 
        marginLeft: 20
    },
    row_item_one: {
        width: DeviceWidth * 0.35,
        height: DeviceWidth * 0.35,
        marginBottom: 20, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    row_item_two: {
        width: DeviceWidth * 0.35,
        height: DeviceWidth * 0.35,
        marginBottom: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row_item_three: {
        width: DeviceWidth * 0.35, 
        height: DeviceWidth * 0.35, 
        marginTop: 20, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    row_image: {
        width: '60%',
        height: '60%',
        marginBottom: 5
    },
    row_text: {
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#82abed'        
    },
    //Add
    add_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
    },
    form_input: {
        width: '80%',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    row_input_first: {
        marginTop: 10,
        marginBottom: 5, 
        textAlign: 'center',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        width: 250,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    row_input: {
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        width: 250,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    row_input_last: {
        marginTop: 5,
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        width: 250,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    row_btn_submit: {
        backgroundColor: '#82abed',
        paddingVertical: 15,
        width: '100%',
        marginTop: 5,
        padding: 8,
        width: 200,
        
    },
    row_btn_submit_text: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    //List
    list_container: {
        flex: 1,
        flexDirection: 'column',
    },
    //Invoice Item
    list_item:{
        padding: 10, 
        margin: 5, 
        flex: 1, 
        height: '100%'
    },
    thumbnail: {
        marginRight: 20
    },
    text_name: {
        color: 'blue', 
        fontSize: 20, 
        fontStyle: 'italic', 
        fontWeight: 'bold'
    },
    //Detail
    item_image: {
        height: 200, 
        width: '100%', 
    }
});