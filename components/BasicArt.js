// @flow
import React, {PureComponent} from 'react'
import {ScrollView, Image, View, Text, StyleSheet} from 'react-native'
import {deviceWidth} from '../libs/Common'
import LottieAnimation from './LottieAnimation'

export default class BasicArt extends PureComponent {
  props: {artwork: Object}

  render(): * {
    var {artwork} = this.props
    var {title, artist, description} = artwork
    return (
      <ScrollView contentContainerStyle={styles.wrapper}>
        {this.renderMedia()}
        <View style={styles.infoSection}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>
    )
  }

  renderMedia (): * {
    var {artwork} = this.props
    var {image, lottie} = artwork
    return lottie ?  <LottieAnimation source={image} width={deviceWidth()} height={deviceWidth()} duration={5000} loop />
    : <Image source={image} style={styles.image} />
  }
}

let styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexGrow: 1
  },
  image: {
    width: deviceWidth(),
    height: deviceWidth(),
    resizeMode: 'contain'
  },
  infoSection: {
    padding: 10,
    backgroundColor: '#ffffff',
    flexGrow: 1
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
  },
  artist: {
    fontSize: 13,
    fontWeight: '200'
  },
  description: {
    fontSize: 15
  }
})
