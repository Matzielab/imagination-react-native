// @flow
import React, {PureComponent} from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import {logo} from '../libs/Images'

export default class Welcome extends PureComponent {

  render(): * {
    return <View style={styles.wrapper}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.credit}>by Matzielab</Text>
    </View>
  }

}

let styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain'
  },
  credit: {
    fontSize: 12,
    color: '#ffffff'
  }
})
