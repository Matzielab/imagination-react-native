// @flow
import React, {PureComponent} from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import {deviceWidth} from '../libs/Common'
import Animation from 'lottie-react-native'

export default class LottieArt extends PureComponent {
  props: {artwork: *, progress: *}

  render(): * {
    var {artwork, progress} = this.props
    var {animation, artTitle, artist, description} = artwork
    return (
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Animation source={animation} style={styles.image} progress={progress} />
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
    height: deviceWidth()
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
