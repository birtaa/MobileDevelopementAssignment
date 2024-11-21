import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 51}} >
      <Button title="bass"></Button>
      <Pressable onPress={() => console.log("basildi fotoya")}>
      <Image source={logoImg} style={{width:300,height:300}}></Image>
      </Pressable>
    </View>
  );
}