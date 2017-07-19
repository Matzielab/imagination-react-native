// @flow
import React, {PureComponent} from 'react'
import {ScrollView, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native'

export default class AboutView extends PureComponent {

  render(): * {
    return (
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Text style={styles.heading}>About this app</Text>
        <Text style={styles.breadText}>
          {'This app is a showroom for the imagination tool created by Matzie. This tool takes the values of the accelorometer from your phone and turns it into a color.\n\n'}
          {'The following screens will show examples of artworks that can be created with this tool.\n\n'}
          {'The imagination algorithm is created to show a different way of utilizing and experiencing programming. It\'s created to show the creative side of code and the possibilities of it.\n\n'}
          {'Imagination is created by Mathias "Matzie" Eriksson for Matzielab'}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => this.goToMatzielab()}>
          <Text>Visit Matzielab.com</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }

  goToMatzielab () {
    Linking.openURL('https://Matzielab.com')
  }
}

let styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: 1,
    padding: 20
  },
  heading: {
    fontSize: 23,
    fontWeight: '700',
    marginBottom: 10,
    color: '#ffffff'
  },
  breadText: {
    fontSize: 15,
    color: '#ffffff'
  },
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderRadius: 5
  }
})
