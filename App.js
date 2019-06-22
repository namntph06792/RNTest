import React from 'react';
import Home from './screens/Home';
import Add from './screens/Add';
import List from './screens/List';
import Detail from './screens/Detail';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Manage Invoice'
    }
  },
  Add: {
    screen: Add,
  },
  List: {
    screen: List
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

