import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'

const percentHeight = 0.3
class MyCarousel extends Component {
    constructor(props) {
        super(props)

        let { width, height } = Dimensions.get("window")

        this.state = {
            isLandscape: false,
            width: width,
            height: height * percentHeight,
            data: this.props.data
        }

        this.checkLandScape = this.checkLandScape.bind(this)
    }

    checkLandScape = (e) => {
        let { width, height } = Dimensions.get('window')
        let isLandscape = width > height
        if (isLandscape != this.state.isLandscape) {
            this.setState({
                isLandscape: isLandscape,
                width: width,
                height: height * percentHeight
            })
        }
    }

    render() {
        let { width, height, data } = this.state
        return (
            <View style={{ height: "30%" }} onLayout={this.checkLandScape}>
                <Swiper showsButtons={true} autoplay={true} autoplayTimeout={2.5}>
                    {
                        data.map((prop, index) => (
                            <View key={index}>
                                <Image style={{ width: width, height: height }} source={{ uri: prop.img }} />
                                <Text
                                    style={styles.item}>
                                    {prop.img}
                                </Text>
                            </View>
                        ))
                    }
                </Swiper>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.carousel_Home
    }
}

export default connect(mapStateToProps)(MyCarousel)

const styles = StyleSheet.create({
    item: {
        position: "absolute",
        bottom: 0,
        color: "white",
        backgroundColor: "#000",
        opacity: 0.3
    },
})