// @flow
import React, {PureComponent} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, Linking, Platform} from 'react-native'
import {logo, matzielabLogo} from '../libs/Images'

export default class Welcome extends PureComponent {

  render(): * {
    return <View style={styles.wrapper}>
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={() => this.goToMatzielab()}>
        <Image source={matzielabLogo} style={styles.matzielabLogo} />
        <Text style={styles.credit}>By Matzielab</Text>
      </TouchableOpacity>
    </View>
  }

  goToMatzielab () {
    Linking.openURL('https://Matzielab.com')
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
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: (Platform.OS === 'ios') ? '20%' : '15%'
  },
  credit: {
    fontSize: 12,
    color: '#ffffff'
  },
  matzielabLogo: {
    width: 20,
    height: 20,
    marginLeft: 5,
    marginRight: 5
  }
})
