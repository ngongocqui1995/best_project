import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
export default class LoadMore extends Component {
  render() {
    let { isLoadMore } = this.props
    let displayImage = isLoadMore ? null : "none"

    return (
      <View style={styles.container}>
        <Image style={{ width: 40, height: 40, display: displayImage }} source={require('../../public/assets/img/load-more.gif')}></Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        alignSelf: "center"
    }
})
