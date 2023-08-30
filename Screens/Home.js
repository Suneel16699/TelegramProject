import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ChatScreen from "./ChatScreen";

const Stack = createNativeStackNavigator();
import {
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";

const data = [
  {
    id: 1,
    name: "Suneel K",
    message: "Good Morning!",
    iconbg: "green",
    time: "12:06",
    count: 2,
  },
  {
    id: 2,
    name: "Sreeni N",
    message: "Hi, Good Morning!",
    iconbg: "blue",
    time: "12:05",
    count: 300,
  },
  {
    id: 3,
    name: "Deb N",
    message: "How are you?",
    iconbg: "grey",
    time: "12:03",
    count: 2,
  },
  {
    id: 4,
    name: "Siva J",
    message: "Update on Task?",
    iconbg: "pink",
    time: "12:00",
    count: 2,
  },
  {
    id: 5,
    name: "Sudhakar C",
    message: "Any Update?",
    iconbg: "orange",
    time: "11:45",
    count: 2,
  },
  {
    id: 6,
    name: "Suneel K",
    message: "Hi, Good Morning!",
    iconbg: "green",
    time: "11:45",
    count: 2,
  },
  {
    id: 7,
    name: "Sreeni N",
    message: "Hi, Good Morning!",
    iconbg: "blue",
    time: "11:45",
    count: 2,
  },
  {
    id: 8,
    name: "Deb N",
    message: "Hi, Good Morning!",
    iconbg: "grey",
    time: "11:45",
    count: 2,
  },
  {
    id: 9,
    name: "Siva J",
    message: "Hi, Good Morning!",
    iconbg: "pink",
    time: "11:45",
    count: 2,
  },
  {
    id: 10,
    name: "Sudhakar C",
    message: "Hi, Good Morning!",
    iconbg: "orange",
    time: "11:45",
    count: 2,
  },
  {
    id: 11,
    name: "Suneel K",
    message: "Hi, Good Morning!",
    iconbg: "green",
    time: "11:45",
    count: 2,
  },
  {
    id: 12,
    name: "Sreeni N",
    message: "Hi, Good Morning!",
    iconbg: "blue",
    time: "11:45",
    count: 2,
  },
  {
    id: 13,
    name: "Deb N",
    message: "Hi, Good Morning!dchvjehvchefbcvkjsdbckjebvckjecvjv",
    iconbg: "grey",
    time: "11:45",
    count: 2,
  },
  {
    id: 14,
    name: "Siva J",
    message: "Hi, Good Morning!",
    iconbg: "pink",
    time: "11:45",
    count: 2,
  },
  {
    id: 15,
    name: "Sudhakar C",
    message: "Hi, Good Morning!",
    iconbg: "orange",
    time: "11:45",
    count: 2,
  },
];

 export const mockMessageData = [
  {
  id:1,
  first:"Hi , hcychgc",
  second:"Hello, hgchgcghc"
},
{
  id:2,
  first:"Hi, kvjvyv",
  second:"Hello"
},
{
  id:3,
  first:"Hi, jvhgvgv",
  second:"Hello"
},
{
  id:4,
  first:"Hi",
  second:"Hello, hgcxcxrtxcfcrycgvgh"
},
{
  id:5,
  first:"Hi",
  second:"Hello"
},
{
  id:6,
  first:"Hi . sckvkdwcvhdbs cmnvxjhcvskj bsdkjhdcb",
  second:"Hello"
},
{
  id:7,
  first:"Hi, bhjcyxtrsrcgvtv",
  second:"Hello, jvygcfrxtcfgcfc"
},
{
  id:8,
  first:"Hi",
  second:"Hello. kwcbwdjkcbhjscgiu2ednkhbhwbc hvwjfvjhwbcuwbckjb"
},
{
  id:9,
  first:"Hi",
  second:"Hello"
},
{
  id:10,
  first:"Hi",
  second:"Hello"
},
{
  id:11,
  first:"Hi",
  second:"Hello"
},
{
  id:12,
  first:"Hi , sckjhbvjcsm x whefkjebcius wcvwkjcbskjbc",
  second:"Hello"
},
{
  id:13,
  first:"Hi",
  second:"Hello"
},
{
  id:14,
  first:"Hi",
  second:"Hello"
},
{
  id:15,
  first:"Hi",
  second:"Hello"
},
{
  id:16,
  first:"Hi svchbefvbwjdcbuewgbfwjbckusaoixbnwkj. hjjchwbcbwkjcbkwcv ",
  second:"Hello. sure"
},
];

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
