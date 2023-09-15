import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ChatScreen from "./ChatScreen";
import { useState,useEffect } from "react";
import axios from 'axios';

const Stack = createNativeStackNavigator();
import {
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";

function useMyApi(url){
  const [data, setData] = useState('');
  useEffect(()=>{
    const fetchData =()=> {
          axios
              .get(url)
              .then((response) => {
                setData(response.data);
              })
    };
    fetchData();
  });

    return data;
  }

function ChatRow(props) {
  const nam = props.items.name.split(" ");
  return (
    <Pressable onPress=
    {
      ()=>{
        props.nav.navigate('ChatScreen',{paramKey:props.items, navigation:props.nav});
        props.nav.setOptions({headerShown:false});
      }
    } style={{borderBottomWidth: 0.3,
      borderBottomColor :"#ccc",
      backgroundColor: props.items.id == 1 ? "#dfdfdf" : "transparent",}}>
      <View
        style={{
          flexDirection: "row",
          left: 10,
          height: 70,
          alignItems: "center",
        }}
      >
        <View style={{width:'10%'}}>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              color: "white",
              justifyContent: "center",
              borderRadius: 50,
              width: 52,
              height: 52,
              fontSize:20,
              backgroundColor: props.items.iconbg,
            }}
          >
            {nam[0][0]}
            {nam[1][0]}
          </Text>
        </View>
        <View
          style={{ left: 30, width :'70%', alignContent: "center", justifyContent: "center" }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {props.items.name}
          </Text>
          <Text ellipsizeMode="tail" numberOfLines={1}>{props.items.message}</Text>
        </View>
        <View style={{ width:'10%' ,left:10, justifyContent:"center" , alignContent:"center"}}>
          <Text>{props.items.time}</Text>
          <Text style={{ textAlign:"center", marginLeft:props.items.count<10?7:0,marginRight:props.items.count<10?7:0 ,color:"#fff", borderRadius:50 , backgroundColor:"#54b059"}}>{props.items.count}</Text>
        </View>
      </View>
    </Pressable>
  );
}

function ChatList({navigation}){
  const data = useMyApi('https://mocki.io/v1/4f3f8561-0a4d-4a5f-90bb-25e460ba03f5');
  return(
    <View>
    <ScrollView>
    {data.map((val, index) => {
      return <ChatRow key = {index} items={val} nav={navigation} />;
    })}
  </ScrollView>
  </View>
  );
}

export default function Home() {
  return (
   <Stack.Navigator initialRouteName="ChatList">
    <Stack.Screen name="ChatList" component={ChatList} options={{headerShown:false}}/>
    <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown:false}}/>
   </Stack.Navigator>
  );
}
