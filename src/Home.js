import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react";


const Home = ({navigation}) => {
return (
    <View>
        <Button
        onPress={() => navigation.navigate("messageboard")}
        title="Welcome to Message Board"
        />
    </View>
)
};

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
    },
  });

export default Home;