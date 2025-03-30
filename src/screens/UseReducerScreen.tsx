import React, { useReducer } from 'react';
import { View, Text } from 'react-native';
import { appTheme } from '../themes/appTheme';
import { BtnTouch } from '../components/BtnTouch';

interface AuthState{
    count:  number;
}

export const UseReducerScreen = () => {

    const initialState: AuthState = {
        count: 10,
    }

    type Action = 
        | { type: "add" } 
        | { type: "decrement" } 
        | { type: "decrement2" } 
        | { type: "reset" }
        | { type: "add2" };

    const counterReducer = ( state: AuthState, action: Action ) => {
        switch( action.type ){
            case 'add':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
            case 'decrement2':
                return { count: state.count - 2 }
            case 'reset':
                return { ...initialState }
            case 'add2':
                return { count: state.count + 2 }
        }
    }

    const [ estado, dispatch ] = useReducer( counterReducer, initialState );

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
                action={ () => dispatch({ type: "add" }) }
                background='black'
            />
            <BtnTouch
                title='Añadir 2'
                action={ () => dispatch({ type: "add2" }) }
                background='black'
            />
            <BtnTouch
                title='Decrementar'
                action={ () => dispatch({ type: "decrement" }) }
                background='black'
            />
            <BtnTouch
                title='Decrementar 2'
                action={ () => dispatch({ type: "decrement2" }) }
                background='black'
            />
            <BtnTouch
                title='Reiniciar'
                action={ () => dispatch({ type: "reset" }) }
                background='black'
            />
        </View>
    )
}
