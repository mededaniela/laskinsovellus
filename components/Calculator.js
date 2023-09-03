import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useState } from 'react';

export default function Calculator({ navigation }) {
  const [numberone, setNumberone] = useState("");
  const [numbertwo, setNumbertwo] = useState("");
  const [result, setResult] = useState("");
  const [data, setData] = useState([]);

  const buttonPressedPlus = () => {
    const calculation = `${numberone} + ${numbertwo} = ${parseFloat(numberone) + parseFloat(numbertwo)}`;
    setData([...data, calculation]);
    setResult(numberone + numbertwo);
  };

  const buttonPressedMinus = () => {
    const calculation = `${numberone} - ${numbertwo} = ${parseFloat(numberone) - parseFloat(numbertwo)}`;
    setData([...data, calculation]);
    setResult(numberone - numbertwo);
  }

  const buttonPressedCount = () => {
    const calculation = `${numberone} * ${numbertwo} = ${parseFloat(numberone) * parseFloat(numbertwo)}`;
    setData([...data, calculation]);
    setResult(numberone * numbertwo);
  }

  const buttonPressedDivide = () => {
    const calculation = `${numberone} / ${numbertwo} = ${parseFloat(numberone) / parseFloat(numbertwo)}`;
    setData([...data, calculation]);
    setResult(numberone / numbertwo);
  }

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  const wholestyle = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
  });

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      margin: 10,
    },
  });

  const textStyle = StyleSheet.create({
    container: {
      fontSize: 25,
      padding: 10,
    }
  });

  const buttonstyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
    },
    space: {
      margin: 10,
      padding: 10,
      fontSize: 25,
      borderColor: 'black',
      borderWidth: 1,
    }
  });

  return (
    <DismissKeyboard>
      <View style={wholestyle.container}>
        <View style={styles.container}>
          <Text style={textStyle.container}>Result: {result}</Text>
          <TextInput
            style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
            keyboardType='numeric'
            onChangeText={numberone => setNumberone(numberone)}
            value={numberone}
          />
          <TextInput
            style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
            keyboardType='numeric'
            onChangeText={numbertwo => setNumbertwo(numbertwo)}
            value={numbertwo}
          />
        </View>
        <View style={buttonstyles.container}>
          <Pressable onPress={() => buttonPressedPlus()} style={buttonstyles.space}>
            <Text>+</Text>
          </Pressable>
          <Pressable onPress={() => buttonPressedMinus()} style={buttonstyles.space}>
            <Text>-</Text>
          </Pressable>
          <Pressable onPress={() => buttonPressedCount()} style={buttonstyles.space}>
            <Text>*</Text>
          </Pressable>
          <Pressable onPress={() => buttonPressedDivide()} style={buttonstyles.space}>
            <Text>/</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            style={buttonstyles.space}
            onPress={() => navigation.navigate('History', { data }, { wholestyle })}
          >
            <Text>History</Text>
          </Pressable>
        </View>
      </View>
    </DismissKeyboard>
  );
}