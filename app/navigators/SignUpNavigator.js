/**
 * @format
 * @flow
 */
import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import SignUp from '../components/signUp/SignUp'
import SignUp2 from '../components/signUp/SignUp2'
import SignUp3 from '../components/signUp/SignUp3'
import Splash from '../screens/Splash'
import LogoTitle from '../screens/LogoTitle'

const SignUpNavigator = createStackNavigator(
  {
    Splash: Splash,
    signUp: SignUp,
    signUp2: SignUp2,
    signUp3: SignUp3,
  },
  {
    initialRouteName: 'Splash',
    /* The header config */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: <LogoTitle />,
    },
  }
)

export default createAppContainer(SignUpNavigator)
