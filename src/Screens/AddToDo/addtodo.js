import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import imagePath from "../../constants/imagePath";
import Input from "../../Components/Inputs";

const AddToDo = ({ navigation }) => {
  return (
    <View style={styles.mainview}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ height: 100, width: 100 }}
            source={imagePath.icBack}
          />
        </TouchableOpacity>
        <View style={styles.view2}>
          <Text style={styles.txt}>Add ToDo</Text>
        </View>
      </View>
        <Input />
    </View>
  );
};
export default AddToDo;
