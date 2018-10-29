import React, {Component} from 'react'
import { View, StatusBar, Platform, Text, StyleSheet, Image } from 'react-native'
import MyCarousel from './Component/Carousel/Carousel'
import fetchData from './Api/Api'
import processingData from './Processing/Processing'
import createStore from "./Store/Store"
import ListImageUpdate from './Component/Home/ListImageUpdate/ListImageUpdate'
import {
  storeCarouselHome, storeListImageHome
} from './Store/Store'
import { Provider } from 'react-redux'
import Login from './Component/Login/Login'
import CustomCSSGlobal from './Component/CustomCSSGlobal/CustomCSSGlobal'
import HomeScreen from './Views/HomeScreen';
import AppNavigator from './Component/Navigation/DrawerNavigation/DrawerNavigation'
const IS_IOS = Platform.OS === 'ios'

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
    }else{
      return (
        <Provider store={store}>
          <AppNavigator/>
        </Provider>
      )
    }
  }
}
