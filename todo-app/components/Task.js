import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Task({ text }) {
  return (
    <View style={styles.item}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});