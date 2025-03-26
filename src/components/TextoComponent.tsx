import React from 'react';
import { Text } from 'react-native';

interface Props{
    texto: string | number;
}

export const TextoComponent = ( { texto }:Props ) => {

    return(
        <Text
            style={{
                color: "red",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                marginVertical: 20
            }}
        >
            {texto}
        </Text>
    )
}
