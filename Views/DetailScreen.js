import React, { Component } from 'react'
import { StyleSheet, Image, TouchableHighlight, Text, View } from 'react-native'
import ListImageUpdate from '../Component/Home/ListImageUpdate/ListImageUpdate';

export default class DetailScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Detail',
        drawerIcon: ({ tintColor }) => (
            <View style={{width: "100%", height: 20}}>
                <Image
                source={require('../public/assets/img/conversation.png')}
                style={[styles.icon, {tintColor: tintColor}]}
                />
            </View>
        ),
    }
  render() {
    return (
        <View style={{flex: 1}}>
            <ListImageUpdate/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
});