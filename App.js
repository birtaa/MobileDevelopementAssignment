import { View, TextInput, FlatList, Text, StyleSheet, Button } from "react-native";
import React, { useState } from 'react';
import Header from './components/header'
import Todoitem from './components/todoitem'
import AddTodo from './components/addtodo'

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
const [todos,setTodos]=useState([
  {text: 'Prepare coffe',key:'1'},
  {text: 'Join meeting at 9 am',key:'2'},
  {text: 'Go to gym',key:'3'}
]);

const submitHandler = (text) => {
  setTodos((prevTodos)=>{
    return [
      {text: text,key: (todos.length+1).toString()},
      ...prevTodos
    ]
  })
}

const pressHandler=(key)=>{
  setTodos((prevTodos)=>{
    return prevTodos.filter(todos => todos.key !=key)
  })
}

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        {/* to form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item})=> (
              <Todoitem item={item} pressHandler={pressHandler} />
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