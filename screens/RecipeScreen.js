import React, { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export default class RecipeScreen extends React.Component {
  render(){
  return(
     <View>
     <Text style = {styles.appTitleText}>Today's Recipe</Text>
     </View>
  );
  }
}



const styles = StyleSheet.create({
appTitleText: {
    marginTop:49,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(40),
    fontFamily: 'cursive',
  },
})