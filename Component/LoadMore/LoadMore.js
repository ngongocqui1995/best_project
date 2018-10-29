import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
export default class LoadMore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../../../public/assets/img/load-more.gif')}></Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center"
    },
    img: {
        width: 50,
        height: 50
    },
})
