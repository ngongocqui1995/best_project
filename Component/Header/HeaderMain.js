import React, { Component } from 'react'
import { StyleSheet, Image, TouchableOpacity, Text, View, TextInput } from 'react-native'

export default class HeaderMain extends Component {
    render() {
        let { drawerNavigation } = this.props
        return (
            <View style={styles.viewHeader}>
                <TouchableOpacity style={styles.btnMenu} onPress={() => drawerNavigation.openDrawer()}>
                    <Image source={require('../../public/assets/img/menu-button.png')}></Image>
                </TouchableOpacity>
                <TextInput style={styles.txtInput}></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewHeader: {
      backgroundColor: "#FFE793",
      height: 80,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    btnMenu: {
        marginTop: 25,
        width: "10%",
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    btnMicro: {
        marginTop: 25,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    txtInput: {
        marginTop: 30,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 5,
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
    }
});