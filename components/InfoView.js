// @flow
import React, {PureComponent} from 'react'
import {ScrollView, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native'

export default class InfoView extends PureComponent {

  render(): * {
    return (
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Text style={styles.heading}>Artist or developer?</Text>
        <Text style={styles.breadText}>
          {'I hope you feel inspired by this example. There is still a lot to do on this app. The plan is to roll this out as a full scale art app, a new way of making visual art.\n\nIf you\'re an artist or developer that\'d like to participate to make this app a greater experience. Contact Matzielab below.'}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => this.contactMatzielab()}>
          <Text>Mail Matzielab</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }

  contactMatzielab () {
    Linking.openURL('mailto:matzielicious@gmail.com')
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
