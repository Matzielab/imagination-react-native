import React, { Component } from 'react'
import { View, DeviceEventEmitter } from 'react-native'
import { SensorManager } from 'NativeModules'

// Values for scale
let ACCELEROMETER_MIN = -10
let ACCELEROMETER_MAX = 10

export default class ImaginationWrapper extends Component {

  state: {accelerometerData: Object}

  constructor (props: *) {
    super(props)
    this.state = {
      accelerometerData: {x:0, y:0, z:0}
    }
  }

  componentDidMount () {
    SensorManager.startAccelerometer(100)
    DeviceEventEmitter.addListener('Accelerometer', (data) => this.accelerometerChanged(data))
  }

  componentWillUnmount () {
    SensorManager.stopAccelerometer()
  }

  accelerometerChanged (data: *) {
    this.setState({accelerometerData: data})
  }

  makeBetween1And0 (num: number): number {
    return num > 1 ? 1 : num < 0 ? 0 : num
  }

  rgbFromAccelerometer (x: number, y: number, z: number): string {
    let scaledX = x+(0-(ACCELEROMETER_MIN))
    let scaledY = y+(0-(ACCELEROMETER_MIN))
    let scaledZ = z+(0-(ACCELEROMETER_MIN))

    let xPercentage = this.makeBetween1And0(scaledX / (ACCELEROMETER_MAX * 2))
    let yPercentage = this.makeBetween1And0(scaledY / (ACCELEROMETER_MAX * 2))
    let zPercentage = this.makeBetween1And0(scaledZ / (ACCELEROMETER_MAX * 2))

    let R = Math.round(255 * xPercentage)
    let G = Math.round(255 * yPercentage)
    let B = Math.round(255 * zPercentage)

    return `rgb(${R}, ${G}, ${B})`
  }

  render() {
    var {accelerometerData} = this.state
    var {x, y, z} = accelerometerData
    var backgroundColor = this.rgbFromAccelerometer(x, y, z)
    return (
      <View style={{backgroundColor}}>
        {this.props.children}
      </View>
    );
  }
}
