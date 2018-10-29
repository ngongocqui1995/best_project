import React, { Component } from 'react'
import { FlatList, StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import Carousel from '../../../Component/Carousel/Carousel';
import LoadMore from '../../LoadMore/LoadMore';
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
    this.handleScroll = this.handleScroll.bind(this)
  }



  renderItem = ({ item }) => {
    let { width, height } = this.state
    return (
      <View>
        <Image style={{ height: height }} source={{uri: item.img}} />
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

  handleScroll = (event) => {
    let { width, height } = Dimensions.get("window")
    console.log(event.nativeEvent.contentOffset.y)
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
          ListHeaderComponent={<Carousel/>}
          ListFooterComponent={<LoadMore/>}
          onEndReachedThreshold={0.1}
          onEndReached={()=>{ console.log("AAAAAAAAAAAAAAAAAAAAAA") }}
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