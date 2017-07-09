// @flow
import React, {Component} from 'react'
import {StatusBar, StyleSheet} from 'react-native'
import Swiper from 'react-native-swiper'
import Welcome from './Welcome'
import BasicArt from './BasicArt'
import ImaginationWrapper from './ImaginationWrapper'
import {circut, abbeyRoad, smalltalk, opacityDots, sky} from '../libs/Images'

export default class Start extends Component {

  getArtworks(): * {
    return [
      {image: circut, title: 'Circutry', artist: 'Matzie', description: 'Lorem ipsum up in here'},
      {image: smalltalk, title: 'Smalltalk', artist: 'Matzie', description: 'Lorem ipsum up in here'},
      {image: opacityDots, title: 'Opacity dots', artist: 'Matzie', description: 'Lorem ipsum up in here'},
      {image: sky, title: 'Tasty sky', artist: 'Matzie', description: 'Lorem ipsum up in here'},
      {image: abbeyRoad, title: 'Abbey Flow', artist: 'Matzie', description: 'Lorem ipsum up in here'},
    ]
  }

  render(): * {
    var artworks = this.getArtworks()
    return (
      <ImaginationWrapper style={styles.wrapper}>
        <StatusBar barStyle='light-content' />
          <Swiper>
            <Welcome />
            <BasicArt artwork={artworks[0]} />
            <BasicArt artwork={artworks[1]} />
            <BasicArt artwork={artworks[2]} />
            <BasicArt artwork={artworks[3]} />
            <BasicArt artwork={artworks[4]} />
          </Swiper>
      </ImaginationWrapper>
    )
  }

}

let styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1
  }
})
