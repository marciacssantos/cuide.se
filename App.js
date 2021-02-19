import React from 'react'
import { StatusBar} from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/views/Home'
import Localizador from './src/views/Localizador'
import Referencias from './src/views/Referencias'
import Usuario from './src/views/Usuario'
import Login from './src/views/Login'

const Drawer = createDrawerNavigator()

export default props => (
  <NavigationContainer>
    <StatusBar />
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Localizador" component={Localizador} />
      <Drawer.Screen name="Referencias" component={Referencias} />
      <Drawer.Screen name="Usuario" component={Usuario} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  </NavigationContainer>

)
