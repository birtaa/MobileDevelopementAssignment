import { View, TextInput, FlatList, Text, StyleSheet, Button } from "react-native";
import React, { useState } from 'react';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My To Do List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
header: {
    height:115,
    paddingTop:75,
    backgroundColor: 'coral',
    alignItems:'center',
},
title: {
    textAlign:'center',
    color:'white',
    fontSize:20,
    fontWeight:'bold',
}
})