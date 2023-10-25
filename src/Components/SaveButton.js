import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const SaveButton = ({saveData}) => {
  return (
    <View
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "lightblue",
        width: 100,
        alignSelf: "center",
        borderRadius:8
      }}
    >
      <TouchableOpacity   onPress={saveData} style={{ height: 30, width: 100 }}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "PlaypenSans-Bold",
            alignSelf: "center",
          }}
        >
          SAVE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SaveButton;
