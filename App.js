import React, {Component} from 'react'
import { View, StatusBar, Platform, ProgressBarAndroid, ProgressViewIOS, Text, 
  StyleSheet, Image, Button } from 'react-native'
import MyCarousel from './Component/Carousel/Carousel'
import fetchData from './Api/Api'
import processingData from './Processing/Processing'
import createStore from "./Store/Store"
import ListImageUpdate from './Component/Home/ListImageUpdate/ListImageUpdate'
import {
  storeCarouselHome, storeListImageHome
} from './Store/Store'
import { Provider } from 'react-redux'
import Login from './Component/Login/Login';
const IS_IOS = Platform.OS === 'ios';

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      store: createStore(),
      isLoad: false,
      message: null
    }

    StatusBar.setTranslucent(true)
    StatusBar.setBackgroundColor("transparent")
    this.initData = this.initData.bind(this)
  }

  async componentDidMount(){
    await this.initData()
  }

  async initData(){
    let store = createStore()

    try{
      const carouselHome = fetchData.__get_Data_Carousel_Home()
      const listImageUpdateHome = fetchData.__get_Data_List_Image_Update_Home()
      let data = await Promise.all([carouselHome, listImageUpdateHome])
      
      const carouselHome1 = processingData.__get_Data_Carousel_Home(data[0])
      const listImageUpdateHome1 = processingData.__get_Data_List_Image_Update_Home(data[1])
      let result = await Promise.all([carouselHome1, listImageUpdateHome1])
      
      store.dispatch(storeCarouselHome(result[0]))
      store.dispatch(storeListImageHome(result[1]))
      this.setState({
        store: store,
        isLoad: true,
        message: "ok"
      })
    }catch(err){
      this.setState({message: "Mất kết nối!"})
      Console.log(err)
    }
  }

  render() {
    let { store, isLoad, message } = this.state
    if(message !== "ok"){
      return ( <Login message={message} onRetryPress={this.initData}/> )
    }else 
    if(!isLoad && !IS_IOS){
      return ( <View style={{flex: 1}}><ProgressBarAndroid/></View> )
    }else if(!isLoad && IS_IOS){
      return ( <View style={{flex: 1}}><ProgressViewIOS/></View> )
    }else{
      return (
        <Provider store={store}>
          <View style={{flex: 1}}>
            <MyCarousel/>
            <ListImageUpdate/>
          </View>
        </Provider>
      )
    }
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