/**
 * @format
 * @flow
 */
import { createStackNavigator, createAppContainer } from 'react-navigation'

import SignUp from '../components/signUp/SignUp'
import SignUp2 from '../components/signUp/SignUp2'
import SignUp3 from '../components/signUp/SignUp3'
import Splash from '../screens/Splash'

const SignUpNavigator = createStackNavigator(
  {
    Splash: Splash,
    signUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
    signUp2: SignUp2,
    signUp3: SignUp3,
  },
  {
    initialRouteName: 'Splash',
  }
)

export default createAppContainer(SignUpNavigator)
