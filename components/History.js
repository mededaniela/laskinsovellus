import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function History({ route, navigation }) {
  const { data } = route.params;

  const historystyle = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: 10,
    }
  })

  return (
    <View style={historystyle.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Calculator"
        onPress={() => navigation.navigate('Calculator')}
      />
    </View>
  );
}