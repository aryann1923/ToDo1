import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import colors from "../styles/colors";

import navigationStrings from "../Navigations/navigationStrings";
c;
const Input = ({ navigation }) => {
 
  const [input, setInput] = useState({
    name: "",
    email: "",
    phonenumber: "",
    description: "",
  });
  const saveData = () => {
    navigation.navigate(navigationStrings.TODO, {
      name: input.name,
      email: input.email,
      number: input.phonenumber,
      phonenumber: input.description,
    });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={input.name}
        onChangeText={(text) => {
          setInput({ ...input, name: text });
        }}
        placeholder="Enter Your Name"
        placeholderTextColor={colors.grey}
      />
      <TextInput
        style={styles.input}
        value={input.email}
        onChangeText={(text) => {
          setInput({ ...input, email: text });
        }}
        placeholder="Enter Your Email"
        placeholderTextColor={colors.grey}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        value={input.phonenumber}
        onChangeText={(text) => {
          setInput({ ...input, phonenumber: text });
        }}
        placeholder="Enter Your Phone Nuumber"
        placeholderTextColor={colors.grey}
        maxLength={10}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={input.description}
        onChangeText={(text) => {
          setInput({ ...input, description: text });
        }}
        placeholder="Enter Description"
        placeholderTextColor={colors.grey}
        multiline={true}
      />

      <SaveButton saveData={saveData} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    color: "grey",
    borderRadius: 8,
    backgroundColor: "lightgrey",
  },
});
