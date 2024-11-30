import { View, TextInput,TouchableOpacity, FlatList, Text, StyleSheet, Button } from "react-native";
import React, { useState } from 'react';

export default function Todoitem({item,pressHandler}){

    return(
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <Text style={styles.item}>
                {item.text}
            </Text>

        </TouchableOpacity>
    )

}

const styles=StyleSheet.create({
    item: {
        padding: 20,
        marginTop:31,
        borderColor: 'gray',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})