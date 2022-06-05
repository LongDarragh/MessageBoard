import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react";


const messageboard = ({navigation}) => {
return (
    <View>
        <Button
        onPress={() => navigation.navigate("Components")}
        title="Welcome to Message Board"
        />
    </View>
)

}

export default messageboard;