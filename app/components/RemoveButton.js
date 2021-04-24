import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default RemoveButton = () => {

    const navigation = useNavigation();

    return (

// Navigation.goBack permet à l'utilisateur de revenir à la page précédente "Home" 

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack("Home")}>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}> X </Text>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({

    addWrapper: {

        width: 30,
        height: 30,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderColor: '#095882',

    },

    addText: {
        
        fontWeight: 'bold',
        color: '#095882',
        fontSize: 20,

    },

});