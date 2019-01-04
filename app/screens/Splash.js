import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { inject } from 'mobx-react'
import styles from '../styles/style'

@inject('stores')
export default class Splash extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    const { stores, navigation } = this.props
    setTimeout(() => {
      navigation.navigate('signUp')
    }, stores.config.SplashTime)
  }
  render() {
    const { stores } = this.props
    return (
      <View style={styles.container}>
        <Image style={styles.splashImage} source={stores.config.SplashImg} />
      </View>
    )
  }
}
