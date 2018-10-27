import React, { Component } from 'react'
import { View, StatusBar, Platform, ProgressBarAndroid, ProgressViewIOS, Text, 
    StyleSheet, Image, TouchableHighlight } from 'react-native'
    
export default class Login extends Component {

  render() {
    let { message } = this.props
    return (
        <View style={styles.border}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../public/assets/img/logo.jpg')}></Image>
                <Text>{message}</Text>
                {
                    message === null ? null : 
                    <TouchableHighlight onPress={this.props.onRetryPress}>
                        <Text style={{backgroundColor: "red"}}>Thử lại</Text>
                    </TouchableHighlight>
                }
            </View> 
            <Text style={styles.title}>Thiên Đường Hạnh Phúc</Text>
        </View> 
    )
  }
}

const styles = StyleSheet.create({
    border: {
      justifyContent: "center", 
      flex: 1, 
      backgroundColor: "#b08cf9", 
      alignItems: "center"
    },
    container: {
      width: "50%", 
      height: "40%", 
      backgroundColor: "white",
      borderRadius: 20,
      alignItems: "center"
    },
    logo: {
      width: "100%", 
      height: "50%", 
      borderRadius: 20
    },
    title: {
      fontFamily: "Gotham"
    }
  })
