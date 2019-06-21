import React from 'react';
import Home from './screens/Home';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {

    }
  }
}, {
    defaultNavigationOptions: {
      gesturesEnabled: false,
      swipeEnabled: false,
      cardStack: {
        gesturesEnabled: false,
        swipeEnabled: false,
      }
    }
  }, {
    mode: 'modal',
    //headerMode: null,
})

const MainContainer = createAppContainer(MainNavigator);

export default function App() {
  return <MainContainer/>
}

