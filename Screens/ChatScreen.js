import {
  Text,
  Image,
  Pressable,
  ScrollView,
  View,
  TextInput,
  FlatList
} from "react-native";

import { useState, useContext, createContext, useEffect } from "react";
import { mockMessageData } from "./Home";

// const messagingData = mockMessageData;

const messagingData = [
  {
    id: 1,
    first: "Hi , hcychgc",
    second: "Hello, hgchgcghc",
  },
  {
    id: 2,
    first: "Hi, kvjvyv",
    second: "Hello",
  },
  {
    id: 3,
    first: "Hi, jvhgvgv",
    second: "Hello",
  },
  {
    id: 4,
    first: "Hi",
    second: "Hello, hgcxcxrtxcfcrycgvgh",
  },
  {
    id: 5,
    first: "Hi",
    second: "Hello",
  },
  {
    id: 6,
    first: "Hi . sckvkdwcvhdbs cmnvxjhcvskj bsdkjhdcb",
    second: "Hello",
  },
  {
    id: 7,
    first: "Hi, bhjcyxtrsrcgvtv",
    second: "Hello, jvygcfrxtcfgcfc",
  },
  {
    id: 8,
    first: "Hi",
    second: "Hello. kwcbwdjkcbhjscgiu2ednkhbhwbc hvwjfvjhwbcuwbckjb",
  },
  {
    id: 9,
    first: "Hi",
    second: "Hello",
  },
  {
    id: 10,
    first: "Hi",
    second: "Hello",
  },
  {
    id: 11,
    first: "Hi",
    second: "Hello",
  },
  {
    id: 12,
    first: "Hi , sckjhbvjcsm x whefkjebcius wcvwkjcbskjbc",
    second: "Hello",
  },
  {
    id: 13,
    first: "Hi",
    second: "Hello",
  },
  {
    id: 14,
    first: "Hi",
    second: "Hello",
  },
  {
    id: 15,
    first: "Hi",
    second: "Hello",
  },
  {
    id: 16,
    first: "Hi svchbefvbwjdcbuewgbfwjbckusaoixbnwkj. hjjchwbcbwkjcbkwcv ",
    second: "Hello. sure",
  },
];

const MessagingContext = createContext();

export default function ChatScreen({ route }) {
  const [input, setInput] = useState("");
  const [countID, setCountID] = useState(messagingData?.length);
  const [messageData, setMessagingData] = useState(messagingData);
  const user = route.params.paramKey;
  const nam = user.name.split(" ");
  const navigation = route.params.navigation;

  useEffect(() => {
    setMessagingData({ id: countID, first: input, second: input });
    setInput("");
  }, [countID]);

  return (
    <MessagingContext.Provider value={messageData}>
      <View style={{flexDirection:'column'}}>
      <View
        style={{
          borderBottomWidth: 0.3,
          borderBottomColor: "#ccc",
          flexDirection: "row",
          height:'11%'
        }}
      >
        <Pressable
          onPress={() => {
            navigation.pop();
          }}
        >
          <Image
            style={{ width: 24, height: 30, margin: 20 }}
            source={{
              uri: "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_arrow_back_48px-128.png",
            }}
          />
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            left: 10,
            height: 70,
            alignItems: "center",
          }}
        >
          <View>
            <Text onPress={()=>{alert("Oops , Not able to get the details :(")}}
              style={{
                textAlignVertical: "center",
                textAlign: "center",
                color: "white",
                justifyContent: "center",
                borderRadius: 50,
                width: 52,
                height: 52,
                fontSize: 20,
                backgroundColor: user.iconbg,
              }}
            >
              {nam[0][0]}
              {nam[1][0]}
            </Text>
          </View>
          <View 
            style={{
              left: 10,
              width: 160,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text onPress={()=>{alert("Oops , Not able to get details :(")}}
             style={{ fontWeight: "bold", fontSize: 16 }}>
              {user.name}
            </Text>
            <Text onPress={()=>{alert("Oops , Not able to get details :(")}} ellipsizeMode="tail" numberOfLines={1}>
              Online
            </Text>
          </View>
        </View>
        <Pressable onPress={()=>{
          alert("Calling is not possible now :(")
        }}>
          <Image
            style={{ width: 25, height: 25, marginVertical: 24 }}
            source={{
              uri: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_call_48px-128.png",
            }}
          />
        </Pressable>
        <Pressable onPress={()=>{alert("Options are not added yet :(")}}>
          <Image
            style={{
              width: 25,
              height: 25,
              marginLeft: 24,
              marginVertical: 24,
            }}
            source={{
              uri: "https://cdn3.iconfinder.com/data/icons/user-interface-1-10/24/icon-ui-1-options-128.png",
            }}
          />
        </Pressable>
      </View>
      <View style={{height:'82%'}}>
        <ChatMessages />
      </View>
      <View style={{height:'6%' ,top:5,flexDirection: "row"}}>
        <TextInput
          value={input}
          onChangeText={setInput}
          inputMode="text"
          placeholder="text your message"
          style={{
            borderWidth: 1,
            width: '84%',
            height:'100%',
            fontSize: 20,
            borderRadius: 10,
            left:10,
            paddingLeft:6
          }}
        ></TextInput>
        <Pressable style={{width:'10%' ,height:'100%', left:10}}
          onPress={() => {
            setCountID(countID + 1);
          }}
        >
          <Image
            style={{ width:'auto', height:'70%', margin: 6 }}
            source={{
              uri: "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_send-128.png",
            }}
          ></Image>
        </Pressable>
      </View>
      </View>
    </MessagingContext.Provider>
  );
}

function ChatMessages() {
  const messageData = useContext(MessagingContext);
  if (messageData?.first !== "" && messageData?.id >= messagingData?.length + 1) {
    messagingData.push(messageData);
  }
  return (
    <FlatList style={{ backgroundColor: "#345" }}
      data={messagingData}
      renderItem = {(item)=><Message items={item}/>}
      keyExtractor={item => item.id}
    />
  );
}

const Message = (props) => {
  return (
    <View style={{flex:1}}>
      <Text
        style={{
          borderWidth: 1,
          borderRadius: 20,
          padding: 5,
          backgroundColor: "#ede",
          width: 220,
          margin: 2,
          flex:1
        }}
      >
        {props.items.item.first}
      </Text>
      <Text
        style={{
          marginLeft: 140,
          borderWidth: 1,
          borderRadius: 20,
          padding: 5,
          backgroundColor: "#ded",
          width: 218,
          marginVertical: 2,
        }}
      >
        {props.items.item.second}
      </Text>
    </View>
  );
};
