import React, {} from 'react';
import {Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default HeaderRight2 = () => {

  const navigation = useNavigation();

  
  const confirmationAlert = () =>

// message alert proposant à l'utilisateur de supprimer la recette ou de revenir en arrière

      Alert.alert(
      "",
      "Voulez vous définitivement supprimer cette recette ?",
      [
      
          {
              text: "Annuler",
              
          },
          { text: "Oui, je le veux", onPress: () => navigation.navigate("Recettes") }

      ]
      
      );


  return (


    <TouchableOpacity 
// Le OnPress permet à l'utilisateur de cliquer sur un bouton et le navigation.navigate lui permet
// d'aller à la page Home (Recettes)
      onPress={() => {confirmationAlert();}}
      style={styles.button}>

      <Text style={styles.supp}> 
      <FontAwesome5 style={styles.addText} name={'trash-alt'} size={26} color="#095882" /> 
      </Text>

    </TouchableOpacity>

    


  );
};

const styles = StyleSheet.create({

  supp: {

    marginRight: 20,

  },

});