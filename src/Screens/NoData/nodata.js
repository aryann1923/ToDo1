import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Addbutton from "../../Components/Addbutton";
import navigationStrings from "../../Navigations/navigationStrings";

const Nodata = ({ navigation }) => {
  return (
    <View style={styles.mainview}>
      <View style={{ marginTop: 50 }}>
        <Text style={styles.txt}> Your To Do</Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.txt}> No Data Found </Text>
      </View>
     
      <Addbutton
        onPress={() => navigation.navigate(navigationStrings.ADDTODO)}
      />
    </View>
  );
};
export default Nodata;
