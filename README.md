# imagination made with React Native
This is a new way of programming art. This app will serve as a display of different artworks made with the imagination library.

## What is imagination?
Imagination for devices takes your accelerometer and turns it into a color. It was created by Matzie for Matzielab as an experimental way of interaction response.

![precis movement](https://user-images.githubusercontent.com/8973386/28459140-9b38d2c8-6e0c-11e7-9875-da3c4a93fadc.gif)
![preview shake](https://user-images.githubusercontent.com/8973386/28459173-bd14d4a0-6e0c-11e7-827f-b758e50ba738.gif)

## What is it good for?
Nothing and everything! It's basically just a visual response to movement or orientation. This app displays the usage of it in combination with visual art.

## How to use the package
Simply install the package with
```
npm install imagination-react-native --save
```
### Imagination itself
You can retrieve the color by passing a function that'll recieve a rgb string whenever the acceleromter updates. It's also good to stop the accelerometer listener when unmounting or so.
```javascript
import {Imagination} from 'imagination-react-native'

componentDidMount() {
  Imagination.onColorChange( (color) => this.setState({color}) )
}

componentWillUnmount() {
  Imagination.stop()
}
```
### ImaginationWrapper component
You can also use the ImaginationWrapper component. It automatically takes care of color changes and stopping. The background color of the component is updated to whatever color the accelerometer represents
```javascript
import {ImaginationWrapper} from 'imagination-react-native'

render ():* {
  return(
    <ImaginationWrapper>
      <Text>Such colors, amaze, wow</Text>
    </ImaginationWrapper>
  )
}
```

## How can i help out?
Imagination is always in the need of artists. If you're into making visual art, illustrations or animations or have any other idea of how to make artworks with this, hit me up and you'll be part of this universe.
If you're a developer and like to help out, message me and we'll make a footprint on the art world together!

## Todo
- [ ] Store artorks in DynamoDB and S3 bucket on AWS
- [ ] Load artworks via Lambda function from DB
- [ ] Create contact form on InfoView
- [ ] Fix perfectly looping Lottie animations
- [ ] Deploy to Play Store
- [ ] Deploy to AppStore
- [ ] Baffle the art world forever

## Credits
Imagination is an idea by Mathias Eriksson created for [Matzielab](https://Matzielab.com)
