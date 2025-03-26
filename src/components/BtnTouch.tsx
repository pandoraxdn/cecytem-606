import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Props{
    title: string;
    background: string;
    action: () => void;
}

export const BtnTouch = ( { title, background, action }: Props ) => {

    return(
        <TouchableOpacity
            onPress={ () => action() }
        >
            <View
                style={{
                    backgroundColor: background,
                    borderRadius: 100,
                    height: 40,
                    width: 120,
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 5,
                    borderWidth: 2,
                    borderColor: "black"
                }}
            >
                <Text
                    style={{
                        color: "white",
                        fontSize: 15,
                        textAlign: "center"
                    }}
                >
                    { title }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

