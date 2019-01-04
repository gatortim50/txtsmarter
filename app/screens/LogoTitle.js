import React, { Component } from 'react'
import { Image } from 'react-native'

export default class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require('../images/header.png')}
        style={{ alignItems: 'flex-start', width: 160, height: 40 }}
      />
    )
  }
}
