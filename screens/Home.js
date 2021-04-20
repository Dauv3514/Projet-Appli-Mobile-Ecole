import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RenderRecettes from '../components/RenderRecettes'

export default Home = () => {

  return (
    <View style={styles.container}>
      <Text> Bonjour ! </Text>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },

});
