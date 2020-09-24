import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home'
import SignIn from './src/screens/Signin'
import UserHome from './src/screens/userhome'

const Stack = createStackNavigator();


export class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign Up" component={SignIn} />
        <Stack.Screen name="UserHome" component={UserHome} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default App
