import {View,Text,Image,Pressable, ScrollView} from 'react-native';

const data = [
  {
    id: 1,
    name: "Akhil A",
    iconbg: "green",
    lastseen: "last seen recently",
  },
  {
    id: 2,
    name: "Abhi M",
    iconbg: "blue",
    lastseen: "last seen a long time ago",
  },
  {
    id: 3,
    name: "Balu C",
    iconbg: "grey",
    lastseen:"last seen a week ago",
  },
  {
    id: 4,
    name: "Chakri G",
    iconbg: "pink",
    lastseen :'last seen a long time ago',
  },
  {
    id: 5,
    name: "Debashish N",
    iconbg: "orange",
    lastseen: "last seen recently",
  },
  {
    id: 6,
    name: "Hari R",
    iconbg: "green",
    lastseen :'last seen a long time ago',
  },
  {
    id: 7,
    name: "John D",
    iconbg: "blue",
    lastseen:"last seen a week ago",
  },
  {
    id: 8,
    name: "Kiran M",
    iconbg: "grey",
    lastseen: "last seen recently",
  },
  {
    id: 9,
    name: "Mohan K",
    iconbg: "pink",
    lastseen:"last seen a week ago",
  },
  {
    id: 10,
    name: "Sudhakar C",
    iconbg: "orange",
    lastseen :'last seen a long time ago',
  },
  {
    id: 11,
    name: "Sreeni N",
    iconbg: "green",
    lastseen:"last seen a week ago",
  },
  {
    id: 12,
    name: "Suneel K",
    iconbg: "blue",
    lastseen: "last seen recently",
  },
  {
    id: 13,
    name: "Tarun V",
    iconbg: "grey",
    lastseen:"last seen a week ago",
  },
  {
    id: 14,
    name: "Uday J",
    iconbg: "pink",
    lastseen: "last seen recently",
  },
  {
    id: 15,
    name: "Varun K",
    iconbg: "orange",
    lastseen :'last seen a long time ago',
  },
];


function Contact(props) {
  const nam = props.items.name.split(" ");
  return (
    <Pressable onPress={()=>{alert("Oops , Not able to get contact details :(")}}
    style={{borderBottomWidth: 0.3,
      borderBottomColor :"#ccc",}}>
      <View
        style={{
          flexDirection: "row",
          left: 10,
          height: 60,
          alignItems: "center",
        }}
      >
        <View style={{width:'15%'}}>
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
          style={{ left: 10, width :'85%', alignContent: "center", justifyContent: "center" }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {props.items.name}
          </Text>
          <Text>{props.items.lastseen}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function Contacts(){
  return(
    <ScrollView>
      {
        data.map((val,index)=>{
          return(
            <Contact key={index} items={val}/>
          );
        })
      }
    </ScrollView>
  )
}