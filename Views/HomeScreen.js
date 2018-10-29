import React, { Component } from 'react'
import ListImageUpdate from '../Component/Home/ListImageUpdate/ListImageUpdate';
import Carousel from '../Component/Carousel/Carousel';
import { StyleSheet, Image, TouchableHighlight, Text, View } from 'react-native'
import HeaderMain from '../Component/Header/HeaderMain';

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <View style={{width: "100%", height: 20}}>
                <Image
                source={require('../public/assets/img/home.png')}
                style={[styles.icon, {tintColor: tintColor}]}
                />
            </View>
        ),
    }
  render() {
    return (
        <View style={{flex: 1}}>
            <HeaderMain drawerNavigation={this.props.navigation}/>
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