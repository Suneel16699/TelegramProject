import {View,Pressable,Text,ScrollView,Image} from 'react-native';

function Call(props) {
  const nam = props.items.name.split(" ");
  return (
    <Pressable onPress={()=>{alert("Oops , Not able to get call details :(")}}
     style={{borderBottomWidth: 0.3,
      borderBottomColor :"#ccc",
      backgroundColor: props.items.id == 1 ? "#efefef" : "transparent",}}>
      <View
        style={{
          flexDirection: "row",
          left: 10,
          height: 60,
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
              width: 50,
              height: 50,
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
          <Text>{props.items.time}</Text>
        </View>
        <View style={{width:'10%',left:10}}>
          <Image style={{width:30,height:30}} source={{uri:"https://cdn3.iconfinder.com/data/icons/aami-web-internet/64/aami8-18-128.png"}}/>
        </View>
      </View>
    </Pressable>
  );
}

const data = [
  {
    id: 1,
    name: "Suneel K",
    message: "Good Morning!",
    iconbg: "green",
    time: "August 12, 2023 at 12:06",
    count: 2,
  },
  {
    id: 2,
    name: "Sreeni N",
    message: "Hi, Good Morning!",
    iconbg: "blue",
    time: "August 11, 2023 at 5:06",
    count: 300,
  },
  {
    id: 3,
    name: "Deb N",
    message: "How are you?",
    iconbg: "grey",
    time: "August 10, 2023 at 8:06",
    count: 2,
  },
  {
    id: 4,
    name: "Siva J",
    message: "Update on Task?",
    iconbg: "pink",
   time: "August 9, 2023 at 5:06",
    count: 2,
  },
  {
    id: 5,
    name: "Sudhakar C",
    message: "Any Update?",
    iconbg: "orange",
    time:"August 9, 2023 at 3:06",
    count: 2,
  },
  {
    id: 6,
    name: "Suneel K",
    message: "Hi, Good Morning!",
    iconbg: "green",
    time: "August 8, 2023 at 7:06",
    count: 2,
  },
];

export default function Calls(){
  return(
  <ScrollView>
    {
      data.map((val,index)=>{
        return(
          <Call key={index} items = {val}/>
        )
      })
    }
  </ScrollView>)
}