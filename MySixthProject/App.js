import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  
  const csuLogo = {
    uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png"
  }

  return (
    <View style={styles.container}>
      
      <ImageBackground source = {csuLogo} style = {styles.image}>

        <Text style = {styles.text}>CSU Logo</Text>

      </ImageBackground>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  text: {
    color: "red",
    fontSize: 40,
    fontWeight: 'bold',
  }
});
