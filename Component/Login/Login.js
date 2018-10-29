import React, { Component } from 'react'
import { View, StatusBar, Platform, ProgressBarAndroid, ProgressViewIOS, Text, 
    StyleSheet, Image, TouchableHighlight } from 'react-native'
    
export default class Login extends Component {

  render() {
    let { message } = this.props

    if(message === null){
      return (
        <View style={styles.border}>
          <View style={styles.containerError}>
              <Image style={styles.logoError} source={require('../../public/assets/img/logo.jpg')}></Image>
          </View>
          <Text>Thiên Đường Hạnh Phúc</Text>
        </View>
      )
    }else{
      return (
        <View style={styles.border}>
          <View style={styles.containerConnect}>
            <Image style={styles.logoConnect} source={require('../../public/assets/img/logo.jpg')}></Image>
            <Text>{message}</Text>
            <TouchableHighlight style={styles.touchRetry} onPress={this.props.onRetryPress}>
              <Text>Thử lại</Text>
            </TouchableHighlight>
          </View>
          <Text>Thiên Đường Hạnh Phúc</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
    border: {
      justifyContent: "center", 
      flex: 1, 
      backgroundColor: "#b08cf9", 
      alignItems: "center"
    },
    containerConnect: {
      width: "50%", 
      height: 200, 
      backgroundColor: "white",
      borderRadius: 10,
      alignItems: "center",
      overflow: "hidden"
    },
    logoConnect: {
      width: "100%", 
      height: "70%", 
      borderRadius: 10
    },
    containerError: {
      width: "50%", 
      height: 200, 
      backgroundColor: "white",
      borderRadius: 10,
      alignItems: "center",
      overflow: "hidden"
    },
    logoError: {
      width: "100%", 
      height: "100%", 
      borderRadius: 10
    },
    touchRetry: {
      backgroundColor: "#34A853",
      borderRadius: 3
    }
})
