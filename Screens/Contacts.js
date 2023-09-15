import {View,Text,Image,Pressable, ScrollView} from 'react-native';

import axios from 'axios';
import { useEffect , useState} from 'react';

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
  const data = useMyApi('https://mocki.io/v1/ee0cc81c-bf73-4651-bfcc-7f0ab2470314');
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
