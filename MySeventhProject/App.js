import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class TouchableButton extends Component {

  onPressButton(){
    alert('You tapped a button')
  }

  render(){
  return (
    <View style={styles.container}>
      
      <View style = {styles.containerButton}>
        <Button
          onPress = {this._onPressButton}
          title = "Press Button 1"
          />
      </View>

      <View style = {StyleSheet.containerLayoutButton}>
        <Button
          onPress = {this._onPressButton}
          title = "Press Button 2"
          />

       <Button
          onPress = {this._onPressButton}
          title = "great"
          color = "green"
          />

      </View>


        <View style  = {styles.containerButton}>
        <Button
         onPress = {this._onPressButton}
          title = "click me"
          color = "blue'"
          />
        </View>
      </View>

  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton: {
    margin: 20,
  },

  containerLayoutButton: {
    margin: 20,
    felxDirection: 'row',
    justifyContent: 'space-between',
  }
});
