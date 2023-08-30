import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
import { Text, View, ScrollView, Pressable, Image } from "react-native";

const accountData = [
  {
    title: "+91 9876543210",
    desc: "Tap to Change Phone number",
  },
  {
    title: "None",
    desc: "Username",
  },
  {
    title: "Bio",
    desc: "Add a few words about yourself",
  },
];

const settingsData = [
  {
    url: "https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/bubble-512.png",
    title: "Chat Settings",
  },
  {
    url: "https://cdn3.iconfinder.com/data/icons/aami-web-internet/64/aami8-06-1024.png",
    title: "Privacy and Security",
  },
  {
    url: "https://cdn2.iconfinder.com/data/icons/instagram-outline/19/30-512.png",
    title: "Notifications and Sounds",
  },
  {
    url: "https://cdn2.iconfinder.com/data/icons/notification-and-settings/794/storage-512.png",
    title: "Data and Storage",
  },
  {
    url: "https://cdn2.iconfinder.com/data/icons/bulb-battery-power-energy-saving/512/6_battery-512.png",
    title: "Power Saving",
  },
  {
    url: "https://cdn0.iconfinder.com/data/icons/folders-40/24/folder_directory-1024.png",
    title: "Chat Folders",
  },
  {
    url: "https://cdn4.iconfinder.com/data/icons/infinity-outline-devices-1/48/004_009_mobile_smartphone_laptop_devices-128.png",
    title: "Devices",
  },
  {
    url: "https://cdn4.iconfinder.com/data/icons/complete-version-1/1024/globe4-128.png",
    title: "Language",
  },
];

const helpData = [
  {
    url: "https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-15-512.png",
    title: "Ask a Question",
  },
  {
    url: "https://cdn0.iconfinder.com/data/icons/aami-web-internet/64/simple-99-2-128.png",
    title: "Telegram FAQ",
  },
  {
    url: "https://cdn0.iconfinder.com/data/icons/zeir-miscellaneous-005/64/policy_privacy_security_shield-512.png",
    title: "Privacy Policy",
  },
];

function AccountSection(props) {
  return (
    <Pressable onPress={()=>{alert("No Further Navigation. Just UI Implementation!!")}}
      style={{ borderBottomWidth: 0.5, borderBottomColor: "#ccc", padding: 10 }}
    >
      <Text style={{ fontSize: 15 }}>{props.items.title}</Text>
      <Text style={{ color: "#888" }}>{props.items.desc}</Text>
    </Pressable>
  );
}

function SettingsSection(props) {
  return (
    <Pressable onPress={()=>{alert("No Further Navigation. Just UI Implementation!!")}}
      style={{
        borderBottomWidth: 0.5,
        borderBottomColor: "#ccc",
        padding: 15,
        flexDirection: "row",
      }}
    >
      <Image
        style={{ width: 24, height: 24, marginRight: 30 }}
        source={{ uri: props.items.url }}
      ></Image>
      <Text style={{ fontSize: 15 }}>{props.items.title}</Text>
    </Pressable>
  );
}

function HelpSection(props) {
  return (
    <Pressable onPress={()=>{alert("No Further Navigation. Just UI Implementation!!")}}
      style={{
        borderBottomWidth: 0.5,
        borderBottomColor: "#ccc",
        padding: 15,
        flexDirection: "row",
      }}
    >
      <Image
        style={{ width: 24, height: 24, marginRight: 30 }}
        source={{ uri: props.items.url }}
      ></Image>
      <Text style={{ fontSize: 15 }}>{props.items.title}</Text>
    </Pressable>
  );
}

function SettingsScreen() {
  return (
    <View style={{ backgroundColor: "#eee" }}>
      <ScrollView>
        <View>
          <Pressable onPress={()=>{alert("No Further Navigation. Just UI Implementation!!")}}
            style={{
              padding: 10,
              backgroundColor:'white',
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 24, height: 24, marginHorizontal: 10 }}
              source={{ uri:"https://cdn4.iconfinder.com/data/icons/twitter-28/512/151_Twitter_Image_Picture_Camera-128.png" }}
            ></Image>
            <Text style={{marginLeft:20, fontSize: 15 , color:"#15769D"}}>Set Profile Photo</Text>
          </Pressable>
        </View>
        <View style={{ padding: 10, backgroundColor: "white", marginTop: 10 }}>
          <Text
            style={{ color: "#15769D", fontWeight: "bold", paddingLeft: 10 }}
          >
            Account
          </Text>
          {accountData.map((val, index) => {
            return <AccountSection key={index} items={val} />;
          })}
        </View>
        <View style={{ padding: 10, backgroundColor: "white", marginTop: 10 }}>
          <Text
            style={{ color: "#15769D", fontWeight: "bold", paddingLeft: 10 }}
          >
            Settings
          </Text>
          {settingsData.map((val, index) => {
            return <SettingsSection key={index} items={val} />;
          })}
        </View>
        <View 
          style={{
            padding: 10,
            backgroundColor: "white",
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Image
            style={{ marginLeft: 15, width: 26, height: 26 }}
            source={{
              uri: "https://cdn2.iconfinder.com/data/icons/august/PNG/Star%20Purple.png",
            }}
          />
          <Text onPress={()=>{alert("No Further Navigation. Just UI Implementation!!")}}
            style={{
              marginLeft: 15,
              fontWeight: 400,
              fontSize: 15,
              paddingLeft: 10,
            }}
          >
            Telegram Premium
          </Text>
        </View>
        <View style={{ padding: 10, backgroundColor: "white", marginTop: 10 }}>
          <Text
            style={{ color: "#15769D", fontWeight: "bold", paddingLeft: 10 }}
          >
            Help
          </Text>
          {helpData.map((val, index) => {
            return <HelpSection key={index} items={val} />;
          })}
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ padding: 20, textAlign: "center", color: "#666" }}>
            Telegram for Android v10.0.1 (3793) store bundled arm64-v8a
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default function Settings() {
  return (
    <View>
      <SettingsScreen />
    </View>
  );
}
