import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style = {styles.containerButton}>
        <Button
          onPress = {() => {
            alert('you tapped a button');

          }}
          title = "Press Button 1"
          />
      </View>

      <View style = {StyleSheet.containerLayoutButton}>
        <Button
          onPress = {() => {
            alert('you tapped button 2');

          }}
          title = "Press Button 2"
          />

       <Button
          onPress = {() => {
            alert('you tapped button 3');

          }}
          title = "great"
          color = "green"
          />

      </View>


        <View style  = {styles.containerButton}>
        <Button
          onPress = {() => {
            alert('you clicked me');

          }}
          title = "click me"
          color = "blue'"
          />
        </View>
      </View>

  );
}

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
