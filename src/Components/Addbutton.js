import React from 'react'
import { View, Text,TouchableOpacity,Image } from 'react-native'
import imagePath from '../constants/imagePath';


 const Addbutton=({onPress,name,email,phonenumber,description})=> {
  return (
    <View style={{alignSelf:"flex-end"}}>
      <TouchableOpacity onPress={onPress} >
        <Image 
        style={{height:100,width:100,marginBottom:10,marginRight:10}}
       source={imagePath.icplus}
        />
      </TouchableOpacity>
    </View>
  )
}
export default Addbutton;