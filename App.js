import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Control from './screens/Control';
import List from './screens/List';
import Detail from './screens/Detail';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
      headerTruncatedBackTitle: 'Home'
    }
  },
  Control: {
    screen: Control,
  },
  List: {
    screen: List, 
    navigationOptions: ({ navigate, navigation }) => ({
      title: 'DashBoard',
      headerRight: (
        <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Control', { action: 0}) }}>
          <Image
            source={require('./assets/add_btn.png')}
            style={{ width: 30, height: 30, marginRight: 15 }}
          />
        </TouchableOpacity>
      ),
    })
  },
  Detail: {
    screen: Detail
  }
}, {
    defaultNavigationOptions: {
      gesturesEnabled: false,
      swipeEnabled: false,
      // cardStack: {
      //   gesturesEnabled: false,
      //   swipeEnabled: false,
      // }
    }
  }, {
    mode: 'modal',
    //headerMode: null,
})

const MainContainer = createAppContainer(MainNavigator);

export default function App() {
  return <MainContainer/>
}

