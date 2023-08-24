import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';
import { useState } from 'react';
import { useWindowDimensions } from 'react-native';

export default function App() {

  const [numberone, setNumberone] = useState("");
  const [numbertwo, setNumbertwo] = useState("");
  const [result, setResult] = useState("");

  const { height, width, scale, fontScale } = useWindowDimensions();



  return (
    <View style={wholestyle.container}>
      <View style={styles.container}>
        <Text>Result: {result}</Text>
        <TextInput style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} keyboardType='numeric'
          onChangeText={numberone => setNumberone(numberone)} value={numberone} />
        <TextInput style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} keyboardType='numeric'
          onChangeText={numbertwo => setNumbertwo(numbertwo)} value={numbertwo} />
      </View>
      <View style={buttonstyles.container}>
        <Button onPress={() => setResult(parseFloat(numberone) + parseFloat(numbertwo))} title="+" />
        <Button onPress={() => setResult(parseFloat(numberone) - parseFloat(numbertwo))} title="-" />
      </View>
    </View>
  );
}

const wholestyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 150,
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const buttonstyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'center',
  },
});