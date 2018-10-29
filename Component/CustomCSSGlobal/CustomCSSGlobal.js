import { setCustomTextInput, setCustomText, setCustomImage, 
    setCustomTouchableOpacity } from 'react-native-global-props'
import React, { Component } from 'react'
import { View } from 'react-native'

const customTextInputProps = {
    underlineColorAndroid: 'rgba(0,0,0,0)',
    style: {
        borderWidth: 1,
        borderColor: 'gray',
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    }
}

const customTextProps = {
    style: {
        fontSize: 14,
        color: 'black',
        fontFamily: "Gotham"
    }
}

const customImageProps = {
    resizeMode: 'cover'
}

const customTouchableOpacityProps = {
    hitSlop: { top: 15, right: 15, left: 15, bottom: 15 }
}

setCustomTextInput(customTextInputProps)
setCustomText(customTextProps)
setCustomImage(customImageProps)
setCustomTouchableOpacity(customTouchableOpacityProps)

export default class CustomCSSGlobal extends Component {
  render() {
    return (
      <View></View>
    )
  }
}
