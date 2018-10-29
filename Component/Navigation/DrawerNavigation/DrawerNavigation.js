import { createDrawerNavigator } from 'react-navigation'
import HomeScreen from '../../../Views/HomeScreen'
import DetailScreen from '../../../Views/DetailScreen'
import CustomDrawerContentComponent from '../CustomDrawerContentComponent/CustomDrawerContentComponent';


const AppNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Detail: {
        screen: DetailScreen
    }
}, 
    {
        drawerPosition: "left",
        initialRouteName: "Home",
        drawerBackgroundColor: "white",
        drawerWidth: 250,
        contentComponent: CustomDrawerContentComponent
    }
)

export default AppNavigator