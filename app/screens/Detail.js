import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Element route redirige les elements des données du tableau data dans cette page "detail"

export default Detail = ({ route }) => {

// Constante permettant de naviguer entre les pages

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.colorView}>
      <View style={styles.colorView}>

        <Image source={{ uri: route.params.image }}
          style={styles.image} />

        
        <View style={styles.nom}>
        <Text style={styles.text}> {route.params.name} </Text>
        </View>


        <View style={styles.centre}>
          <FontAwesome5 name={'carrot'} size={20} color="#e59d32" />
          <Text style={styles.ingredient}> Ingrédients </Text>
        </View>


        <Text style={styles.ing}> {route.params.ingredients} </Text>



        <View style={styles.centre}>
          <FontAwesome5 name={'utensils'} size={20} color="#6b5e5e" />
          <Text style={styles.description}> Description </Text>
        </View>



        <Text style={styles.des}> {route.params.description} </Text>

      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({

  colorView: {

    backgroundColor: '#f0faff',

  },

  image: {
    height: 200,
    width: 500,
  },

  nom: {

    height: 70,
    width: 330,
    backgroundColor: '#003c62',
    color: "#FFF",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: 'row',
    justifyContent : 'center',

  },

  text : {

    color : 'white',
    fontSize: 25,
    marginTop : 14,
    marginRight: 10,

  },

  centre: {

    flexDirection: 'row',
    marginLeft: 50,
    marginTop: 40,

  },

  ingredient: {

    color: '#003c62',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,

  },

  ing: {

    color: '#003c62',
    marginTop: 30,
    marginLeft: 50,
    fontSize : 15,
    fontWeight : 'bold',
    marginHorizontal : 25,

  },

  description: {

    color: '#003c62',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,

  },

  des: {

    color: '#003c62',
    marginTop: 30,
    marginLeft: 50,
    marginHorizontal : 18,

  },


});