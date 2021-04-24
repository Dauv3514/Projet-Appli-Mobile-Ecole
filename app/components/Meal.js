import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default Meal = () => {

    const navigation = useNavigation();

// Tableau qui contiendra mes recettes et initialisation des mes données avec des chaînes vides
//que l'utilisateur remplira en validant le formulaire.

    const [recettes, setRecettes] = useState([]);
    const [nomRecettes, setNomRecettes] = useState('');
    const [imageRecettes, setImageRecettes] = useState('');
    const [ingredientsRecettes, setIngredientsRecettes] = useState('');
    const [categorieRecettes, setCategorieRecettes] = useState('');
    const [descriptionRecettes, setDescriptionRecettes] = useState('');

// Fonction qui permet de sauvegarder des données (toutes les recettes) à l'aide de la librairie async storage (sauvegarde les données et persiste les données locales )

    const saveRecette = async () => {

// Nouveau tableau de recette

        let newRecettes = [...recettes];

// Chaque élément de la data est entré dans un nouveau tableau (name, image etc...)
        newRecettes = [...recettes, { key: recettes.length, name: nomRecettes, image: imageRecettes, categorie: categorieRecettes, ingredients: ingredientsRecettes, description: descriptionRecettes }];

// La fonction recette crée le nouveau tableau
        setRecettes(newRecettes);

// On obtient (va chercher) la clé de la recette
        await AsyncStorage.setItem('@recettes', JSON.stringify(newRecettes));
        console.log(recettes);

// Lorsque l'utilisateur saisies les données les inputs sont remis à zéro, 
// sans texte (chaines vides)

        setNomRecettes('');
        setImageRecettes('');
        setIngredientsRecettes('');
        setCategorieRecettes('');
        setDescriptionRecettes('');
        
    };


    useEffect(() => {

// On restaure les données de l'AsyncStorage au lancement de l'application (démarrage)
        restoreDataFromAsyncStorage();

    }, []);

// Fonction de restauration des données de l'AsyncStorage

    const restoreDataFromAsyncStorage = async () => {
        const localStorageDatas = await AsyncStorage.getItem('@recettes');
        return localStorageDatas != null
            ? setRecettes(JSON.parse(localStorageDatas))
            : null;
    };

return (

// Récupération des données des inputs

        <ScrollView>

            <View style={styles.colorView}>

                <View style={styles.taskInputContainer}>

                    <Text style={styles.text}> Nom de la recette </Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={setNomRecettes}
                        value={nomRecettes}
                    />
                    <Text style={styles.text}> URL de l'image </Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={setImageRecettes}
                        value={imageRecettes}
                    />
                    <Text style={styles.text}> Catégorie </Text>

                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={setCategorieRecettes}
                        value={categorieRecettes}
                    />
                    <Text style={styles.text}> Ingrédients </Text>

                    <TextInput
                        multiline
                        style={styles.input2}
                        onChangeText={setIngredientsRecettes}
                        value={ingredientsRecettes}
                    />
                    <Text style={styles.text}> Description </Text>

                    <TextInput
                        multiline
                        style={styles.input2}
                        onChangeText={setDescriptionRecettes}
                        value={descriptionRecettes}
                    />

                    <TouchableOpacity                      
                        accessibilityLabel="Ajouter une recette"
                        onPress={() => { saveRecette(); navigation.navigate("Recettes");}}
                    >
                        
                    <Text style={styles.button}> Valider </Text>

                    </TouchableOpacity>


                </View>

            </View>

        </ScrollView>

    );

};

const styles = StyleSheet.create({

    colorView: {

        backgroundColor: '#f0faff',

    },

    taskInputContainer: {

        marginTop: 25,

    },

    text: {

        color: '#003c62',
        fontSize: 20,
        marginLeft: 22,
        fontWeight: 'bold',
        marginBottom: -20

    },


    input: {

        backgroundColor: '#d6e7f0',
        width: '90%',
        margin: 20,
        borderRadius: 10,
        height: 65

    },

    input2: {

        backgroundColor: '#d6e7f0',
        width: '90%',
        margin: 20,
        borderRadius: 10,
        height: 90

    },

    button: {

        fontSize: 20,
        color: "white",
        borderRadius: 10,
        backgroundColor: '#003c62',
        width: 100,
        marginLeft: 155,
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',

    },

});