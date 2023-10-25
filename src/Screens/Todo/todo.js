import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import styles from '../NoData/styles';
const Todo=({route,navigation})=> {
  const name = route.params.name;
  const email = route.params.email;
  const phonenumber = route.params.phonenumber;
  const description = route.params.description;

  //console.log to check whether the data has travelled
  console.log('name->',name);

  return (
    <View style={styles.mainview}>
      <Text>To Do Screen</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("addtodo")}>
        <Text style={styles.txt}>NO data screen</Text>
        <Text>{name}</Text>
        <Text>{email}</Text>
        <Text>{phonenumber}</Text>
        <Text>{description}</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Todo;