import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Meal from '../components/Meal';

export default HeaderRight = () => {

  const navigation = useNavigation();

// Création de la modal (pop-pup) , avec nom (état) et la fonction
  const [modalOpen, setModalOpen] = useState(false);


  return (

// Ouverture du pop-pup en cliquant sur le boutton + fermeture du pop-up en cliquant sur le boutton croix. Le modal est un pop-up. La balise meal affiche le formulaire sur la page.

    <TouchableOpacity style={styles.button}
      onPress={() => setModalOpen(true)}
      name="add"
    >

    <View style={styles.addWrapper}>
        <Text style={styles.addText}> + </Text>
    </View>


    <Modal visible={modalOpen}>
        <View style={styles.modalContent}>
          <View style={styles.centrage}>
            <Text style={styles.text}> Ajouter une Recette </Text>


            <TouchableOpacity style={styles.button}
              name="close"
              onPress={() => setModalOpen(false)}
            >

            <View style={styles.removeWrapper}>
                <Text style={styles.removeText}> X </Text>
            </View>

            </TouchableOpacity>

          </View>
          <Meal/>
        </View>
    </Modal>

    </TouchableOpacity>

  );
};


const styles = StyleSheet.create({

  button: {

    marginRight: 25,

  },

  addWrapper: {

    backgroundColor: '#f0faff',
    width: 30,
    height: 30,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#003c62',
    borderWidth: 2,

  },

  addText: {

    fontSize: 20,
    color: '#003c62',

  },

  modalContent: {

    backgroundColor: '#f0faff',

  },

  centrage: {

    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,

  },

  text: {

    fontSize: 25,
    marginLeft: 60,
    color: '#003c62',
    fontWeight : 'bold',

  },

  removeWrapper: {

    width: 80,
    height: 30,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderColor: '#095882',


  },

  removeText: {

    fontWeight: 'bold',
    color: '#003c62',
    fontSize: 25,
    marginLeft: 5,

  },


});