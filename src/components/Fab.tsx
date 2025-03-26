import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props{
    title:      string;
    position:   'button-right' | 'button-left';
    action:     () => void;
}

export const Fab = ( {title, position, action}: Props ) => {

    const btnPosition = ( position == "button-right" ) ? style.fabLocationBR : style.fabLocationBL;

    return(
        <TouchableOpacity
            onPress={ () => action() }
            style={ btnPosition }
        >
            <View
                style={ style.fab }
            >
                <Text
                    style={ style.fabText }
                >
                    { title }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    fabText:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    },
    fab: {
        backgroundColor: "violet",
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center"
    },
    fabLocationBR: {
        position: "absolute",
        bottom: 25,
        right: 25
    },
    fabLocationBL: {
        position: "absolute",
        bottom: 25,
        left: 25
    }
});

