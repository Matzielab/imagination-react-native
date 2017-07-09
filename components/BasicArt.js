// @flow
import React, {PureComponent} from 'react'
import {ScrollView, Image, View, Text, StyleSheet} from 'react-native'
import {deviceWidth} from '../libs/Common'

export default class BasicArt extends PureComponent {
  props: {artwork: *}

  render(): * {
    var {image, artTitle, artist, description} = this.props.artwork
    return (
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Image source={image} style={styles.image} />
        <View style={styles.infoSection}>
          <Text style={styles.title}>{artTitle}</Text>
          <Text style={styles.artist}>{artist}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>
    )
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
    fontSize: 18,
    fontWeight: '200'
  },
  description: {
    fontSize: 15
  }
})
