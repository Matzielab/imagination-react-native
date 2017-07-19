// @flow
import { Animated, View, StyleSheet } from 'react-native'
import React, {PureComponent} from 'react'
import Animation from 'lottie-react-native'

export default class LottieAnimation extends PureComponent {
  props: {source: *, width: number, height: number, duration: number, startPoint?: number, endPoint?: number, loop?: boolean, style?: StyleSheet}
  state: {progress: Animated, stopAnimation: boolean}

  constructor (props: *) {
    super(props)
    this.state = {
      progress: new Animated.Value(props.startPoint || 0),
      stopAnimation: !props.loop
    }
  }

  componentDidMount () {
    this.startAnimation()
  }

  componentDidUpdate () {
    this.startAnimation()
  }

  componentWillUnmount () {
    this.stopAnimation()
  }

  startAnimation () {
    var {loop} = this.props
    loop ? this.loopAnimation() : this.animateOnce()
  }

  stopAnimation () {
    this.state.progress.stopAnimation(() => {
      this.setState({stopAnimation: true})
    })
  }

  animateOnce () {
    var {startPoint, endPoint, duration} = this.props
    this.state.progress.setValue(startPoint || 0)

    Animated.timing(this.state.progress, {
      toValue: endPoint || 1,
      duration: duration
    }).start()
  }

  loopAnimation () {
    var {startPoint, endPoint, duration, loop} = this.props
    var {progress, stopAnimation} = this.state

    Animated.sequence([
      Animated.timing(progress, {
        toValue: endPoint || 1,
        duration: duration
      }),
      Animated.timing(progress, {
        toValue: startPoint || 0,
        duration: 0
      })
    ]).start((endState) => {
      if (!stopAnimation && endState.finished && loop) {
        this.loopAnimation()
      }
    })
  }

  render (): * {
    var {source, style, width, height} = this.props
    var {progress} = this.state
    return <View style={[style, {width, height}]}>
      <Animation
        style={{width, height}}
        source={source}
        progress={progress} />
    </View>
  }
}
