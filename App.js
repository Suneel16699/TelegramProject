import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

// import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator , DrawerContentScrollView , DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import "react-native-gesture-handler";
import Home from "./Screens/Home";
import Calls from "./Screens/Calls";
import NewGroup from "./Screens/NewGroup";
import Contacts from "./Screens/Contacts";
import Settings from "./Screens/Settings";

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

const CustomDrawer = (props)=>{
  return(
    <DrawerContentScrollView style={{backgroundColor:"15769D"}}>
      <View style={{ backgroundColor:"#15769D" , paddingTop:30}}>
        <View style={{flexDirection:"row", height:100,justifyContent:"space-between",padding:10, alignItems:'center'}}>
          <Text style={{fontSize:24 ,color:"#fff", backgroundColor:"#046A93" , width:60 ,height:60, textAlign:"center", textAlignVertical:"center", borderRadius:30}}>SU</Text>
          <Pressable>
          <Image source={{uri:"https://cdn4.iconfinder.com/data/icons/social-media-and-branding/24/device_theme-1024.png"} } style={{height:30, width:30, borderRadius:15 , borderWidth:2}}/>
          </Pressable>
        </View>
        <View style={{padding:10}}>
          <Text style={{color:'#fff' , fontWeight:'bold'}}>Suneel Kumar</Text>
          <Text style={{color:'#fff'}}>+91 9876543210</Text>
        </View>
      </View>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default function App() {
  return (
      <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerTintColor:"#fff", headerStyle:{backgroundColor:"#15769D"}}}  
      drawerContent={(props)=>{

        return (
          <CustomDrawer {...props}/>
        )
      }} initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} options={{title:"Telegram"}} />
        <Drawer.Screen name="New Group" component={NewGroup}/>
        <Drawer.Screen name="Contacts" component={Contacts}/>
        <Drawer.Screen name = "Calls" component={Calls}/>
        <Drawer.Screen name = "Settings" component={Settings}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
