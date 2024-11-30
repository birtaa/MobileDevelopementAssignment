import { View, TextInput,TouchableOpacity, FlatList, Text, StyleSheet, Button } from "react-native";
import React, { useState } from 'react';

export default function AddTodo({submitHandler}){
    const [text,setText]=useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    return(
        <View>
            <TextInput 
            style={{
                marginBottom: 10,
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderBottomWidth:1,
                borderBottomColor:'green',
            }}
            placeholder="New To Do..."
            onChangeText={changeHandler}
            />
                        <Button 
            onPress={() => submitHandler(text)}
            title='Add to-do'
            />
        </View>
    )
}

