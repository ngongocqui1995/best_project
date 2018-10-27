import React, { Component } from 'react'
import { FlatList, StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'

const percentHeight = 1
const Height = 200

class ListImageUpdate extends Component {
  constructor(props){
    super(props)
    let { width, height } = Dimensions.get("window")

    this.state = {
        isLandscape: false,
        width: width,
        height: Height*percentHeight,
        data: this.props.data,
    }

    this.checkLandScape = this.checkLandScape.bind(this)
  }

  renderItem = ({ item }) => {
    let { width, height } = this.state
    return (
      <View>
        <Image style={{ height: height }} source={{uri: item.img}} />
        <Text
        style={styles.item}>
            {item.img}
        </Text>
      </View>
    )
  }

  checkLandScape = (e) => {
    let { width, height } = Dimensions.get('window')
    let isLandscape = width > height
    if (isLandscape != this.state.isLandscape){
        this.setState({
            isLandscape: isLandscape,
            width: width,
            height: Height*percentHeight
        })
    }
  }

  keyExtractor = (item, index) => index+"";

  render() {
    let { data } = this.state
    return (
      <View style={{flex: 1}} onLayout={this.checkLandScape}>
        <FlatList
          style={{flex: 1}}
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
      data: state.listImage_Home
  }
}

export default connect(mapStateToProps) (ListImageUpdate)

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      justifyContent: 'flex-start'
  },
  item: {
      position: "absolute", 
      bottom: 0, 
      color: "white", 
      backgroundColor: "#000", 
      opacity: 0.3
  },
})