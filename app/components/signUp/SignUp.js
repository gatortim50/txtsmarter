/**
 * @format
 * @flow
 */
import React from 'react'
import { observer } from 'mobx-react/native'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableHighlight,
} from 'react-native'
import { FormInput, Button } from 'react-native-elements'
import styles from '../../styles/style'
import Icon from 'react-native-vector-icons/FontAwesome'

// @inject('AuthStore')
@observer
class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fontLoaded: true,
      phone: '',
      phone_valid: true,
      showLoading: false,
    }
  }

  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableHighlight
        onPress={() => navigation.navigate('signUp2', { index: 1 })}
      >
        <Image
          source={require('../../images/icons/arrow-right.png')}
          style={{ alignItems: 'center', width: 20, height: 20 }}
        />
      </TouchableHighlight>
    ),
  })

  async componentDidMount() {
    this.setState({ fontLoaded: true })
    console.log('state : ', this.state)
  }

  validatePhone = phone => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(phone)
  }

  submitCredentials = () => {
    const { showLoading } = this.state

    this.setState({
      showLoading: !showLoading,
    })
  }

  render() {
    const { phone, phone_valid, showLoading, fontLoaded } = this.state
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../images/bg_screen.jpg')}
          style={styles.bgImage}
        >
          {fontLoaded ? (
            <View style={styles.loginView}>
              <View style={styles.loginTitle}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.travelText}>SIGN UP</Text>
                </View>
              </View>
              <View style={styles.loginInput}>
                <FormInput
                  leftIcon={
                    <Icon
                      raised
                      name="heartbeat"
                      type="font-awesome"
                      color="#f50"
                      size={25}
                    />
                  }
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={phone => this.setState({ phone })}
                  value={phone}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  placeholder="Enter phone number"
                  autoFocus={false}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  returnKeyType="next"
                  ref={input => (this.phoneInput = input)}
                  onSubmitEditing={() => {
                    this.setState({ phone_valid: this.validatePhone(phone) })
                    this.passwordInput.focus()
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                  errorStyle={{ textAlign: 'center', fontSize: 12 }}
                  errorMessage={
                    phone_valid ? null : 'Please enter a valid phone number'
                  }
                />
              </View>
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </ImageBackground>
      </View>
    )
  }
}

export default SignUp
