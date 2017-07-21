// @flow
import React, {Component} from 'react'
import {StatusBar, StyleSheet, Platform} from 'react-native'
import Swiper from 'react-native-swiper'
import Welcome from './Welcome'
import AboutView from './AboutView'
import BasicArt from './BasicArt'
import InfoView from './InfoView'
import {ImaginationWrapper} from 'imagination-react-native'
import Artworks from '../libs/Artworks'

export default class Start extends Component {

  render(): * {
    return (
      <ImaginationWrapper style={styles.wrapper}>
        <StatusBar barStyle='light-content' />
          <Swiper style={styles.swiper} paginationStyle={styles.swiperPagination}>
            <Welcome />
            <AboutView />
            <BasicArt artwork={Artworks[0]} />
            <BasicArt artwork={Artworks[1]} />
            <BasicArt artwork={Artworks[2]} />
            <BasicArt artwork={Artworks[3]} />
            <BasicArt artwork={Artworks[4]} />
            <InfoView />
          </Swiper>
      </ImaginationWrapper>
    )
  }

}

let styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1
  },
  swiper: {
    marginTop: (Platform.OS === 'ios') ? 10 : 0
  },
  swiperPagination: {
    bottom: (Platform.OS === 'ios') ? '5%' : '10%'
  }
})
