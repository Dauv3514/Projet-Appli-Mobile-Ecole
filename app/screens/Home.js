import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default Home = () => {

  const navigation = useNavigation();

// Tableau de mes données affichées dans ma flatlist

  const [data, setDatas] = useState([

    {
      key: '1',
      categorie: 'Plats',
      name: 'Omelette',
      image: 'https://blog.pourdebon.com/wp-content/uploads/2018/03/omelette.jpg',
      ingredients: '3 oeufs , 1c de lait, beurre, garnitures de votre choix (ex : champignons, fromage, poivrons verts etc..',
      description: ' Etape 1: Préparer les ingrédients pour la garniture, Etape 2: Fouetter les œufs avec une cuillère à thé de lait, et assaisonner de sel et de poivre. Etape 3: Enduire la poêle d’aérosol de cuisson ou de beurre et faire chauffer à feu moyen. Etape 4 :Lorsque le dessus de l’omelette est encore humide, l’omelette est prête à garnir. Plier l’omelette en 2 à l’aide de la spatule et laisser légèrement dorer le dessous.'

    },
    {
      key: '2',
      categorie: 'Plats',
      name: 'Pancakes',
      image: 'https://www.cnewyork.net/wp-content/uploads/2020/04/pancakes-new-york.jpg',
      ingredients:'30cl de Lait, 1 sachet de Levure, 30g sucre semoule, 1 pincée de sel, 250g de farine, 2 oeufs, 65g beurre doux',
      description: 'Etape 1 : Faire fondre le beurre, dans une casserole à feu doux. Etape 2: Mettre la farine, la levure et le sucre dans un saladier. Mélanger et creuser un puits. Etape 3: Ajouter les oeufs entiers et fouetter. Etape 4 : Incorporer le beurre fondu, fouetter puis délayer progressivement le mélange avec le lait. Etape 5: Laisser reposer la pâte au minimum 1 heure au réfrigérateur. Etape 6: Dans une poêle chaude et légèrement huilée, faire cuire comme des crêpes, mais en les faisant plus petites.',
    },

  ]);

  useEffect(() => {

// Restauration des données AsyncStorage au lancement de l'appli

    restoreDataFromAsyncStorage();
  });

// Restauration des données de l'AsyncStorage

  const restoreDataFromAsyncStorage = async () => {
    const localStorageDatas = await AsyncStorage.getItem('@recettes');
    return localStorageDatas != null
      ? setDatas(JSON.parse(localStorageDatas))
      : null;
  };


  return (

// Liste affichant mes données

    <FlatList
      data={data}
      keyExtractor={item => item.key}
      renderItem={({ item }) =>
      (
        <View style={styles.item}>

          <Image source={{ uri: item.image }} style={styles.image} />

          <View>
            <Text style={styles.text}>{item.categorie}</Text>
          </View>

          <Text style={styles.text2}>{item.name}</Text>



          <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Detail", item)}>

            <FontAwesome5 name={'eye'} size={20} color="white" />

          </TouchableOpacity>


        </View>


      )}

    />

  );



};



const styles = StyleSheet.create({

  item: {

    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 380,
    height: 80,
    marginHorizontal: 5,
    backgroundColor: '#003c62',
    borderRadius: 15,
  },

  image: {

    height: 80,
    width: 80,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },

  text: {

    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 66,
    marginRight: 60,
    backgroundColor: 'white',

  },


  text2: {

    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 90,

  },


  touch: {

    marginRight: 40,

  }

});
