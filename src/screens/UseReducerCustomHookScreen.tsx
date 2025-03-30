import React from 'react';
import { View, Text } from 'react-native';
import { appTheme } from '../themes/appTheme';
import { BtnTouch } from '../components/BtnTouch';
import { useReducerContador } from '../hooks/useReducerContador';


export const UseReducerCustomHookScreen = () => {

    const { estado, add, add2, decrement, decrement2, reset } = useReducerContador();


    return(
        <View
            style={ appTheme.marginGobal }
        >
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center"
                }}
            >
                {estado.count}
            </Text>
            <BtnTouch
                title='Añadir'
                action={ () => add() }
                background='black'
            />
            <BtnTouch
                title='Añadir 2'
                action={ () => add2() }
                background='black'
            />
            <BtnTouch
                title='Decrementar'
                action={ () => decrement() }
                background='black'
            />
            <BtnTouch
                title='Decrementar 2'
                action={ () => decrement2() }
                background='black'
            />
            <BtnTouch
                title='Reiniciar'
                action={ () => reset() }
                background='black'
            />
        </View>
    )
}
