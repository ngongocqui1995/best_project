import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation'

export default class CustomDrawerContentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            isDropdown: false
        }

        this.updateStateDropdown = this.updateStateDropdown.bind(this)
    }

    updateStateDropdown(event){
        this.setState({isDropdown: !this.state.isDropdown})
    }

    render() {
        let { isDropdown } = this.state

        if(!isDropdown){
            return (
                <ScrollView>
                    <View style={styles.borderView}>
                        <View style={styles.viewLogo}>
                            <Text>Q</Text>
                        </View>
                        <Text>Quí Ngô</Text>
                        <View style={styles.viewUser}>
                            <Text numberOfLines={1}>tranphanchau10@gmail.com</Text>
                            <TouchableOpacity onPress={this.updateStateDropdown}>
                                <Image style={styles.dropdown} source={require('../../../public/assets/img/drop-down-arrow.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                        <DrawerItems {...this.props} />
                    </SafeAreaView>
                </ScrollView>
            )
        }else{
            return (
                <ScrollView>
                    <View style={styles.borderView}>
                        <View style={styles.viewLogo}>
                            <Text>Q</Text>
                        </View>
                        <Text>Quí Ngô</Text>
                        <View style={styles.viewUser}>
                            <Text numberOfLines={1}>tranphanchau10@gmail.com</Text>
                            <TouchableOpacity onPress={this.updateStateDropdown}>
                                <Image style={styles.dropdown} source={require('../../../public/assets/img/drop-up-arrow.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={styles.viewDetail}>
                            <Image source={require('../../../public/assets/img/profiles.png')}></Image>
                            <Text style={styles.txt}>Thông Tin</Text>
                        </View>
                        <View style={styles.viewLogout}>
                            <Image source={require('../../../public/assets/img/logout.png')}></Image>
                            <Text style={styles.txt}>Đăng Xuất</Text>
                        </View>
                    </View>
                </ScrollView>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    borderView: {
        height: 160,
        backgroundColor: "#17A05D",
        alignItems: "center"
    },
    viewLogo: {
        marginTop: 30,
        backgroundColor: "red",
        height: 60,
        width: 60,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        shadowColor: "#282A36"
    },
    viewUser: {
        flexDirection: "row", 
        marginLeft: 15, 
        marginRight: 15,
        alignItems: "center"
    },
    dropdown: {
        width: 20, 
        height: 20
    },
    txt: {
        margin: 5
    },
    viewDetail: {
        flexDirection: "row",
        margin: 10,
        alignItems: "center"
    },
    viewLogout: {
        flexDirection: "row",
        margin: 10,
        alignItems: "center"
    }
})