import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';


export default RenderRecettes = () => {
    
const navigation = useNavigation();
return (
    <View>
    <Text> Recettes </Text>
    
    <Button
        onPress={() => {
            navigation.navigate('Detail', {
            
            });
        }}
        title="Voir le détail de la recette"
        color="#841584"
        accessibilityLabel="Bouton pour voir le détail de la Recette"
    />
    </View>
);
};