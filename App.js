import { View, TextInput, FlatList, Text, StyleSheet, Button } from "react-native";
import React, { useState } from 'react';
import Header from './components/header'

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
const [todos,setTodos]=useState([
  {text: 'prepare coffee',key:'1'},
  {text: 'cv buyut',key:'2'},
  {text: 'tuzbır ve kapanıs',key:'3'}
]);

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item})=> (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>

    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    //alignItems: 'center',
    //justifyContent: 'center',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
  }

})