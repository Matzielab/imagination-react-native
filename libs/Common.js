import {Dimensions} from 'react-native'

export let deviceWidth = () => {
  return Dimensions.get('window').width
}
