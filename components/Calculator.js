import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
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
        }
    }
    );

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
                <Button onPress={() => buttonPressedPlus()} title="+" />
                <Button onPress={() => buttonPressedMinus()} title="-" />
                <Button
                    title="History"
                    onPress={() => navigation.navigate('History', {data}, {styles})}
                />
            </View>

        </View>
    );



};