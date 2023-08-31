import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function History({ route, navigation }) {
    const { data } = route.params;

return (
    <View>
    <FlatList data={data} renderItem={({item}) => <Text>{item}</Text>}
keyExtractor={(item, index) => index.toString()} />
<Button
title="Calculator"
onPress={() => navigation.navigate('Calculator')}
/>
    </View>
);

};