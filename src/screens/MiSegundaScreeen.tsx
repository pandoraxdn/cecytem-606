import React from 'react';
import { View, Button} from 'react-native';
import { appTheme } from '../themes/appTheme';
import { TextoComponent } from '../components/TextoComponent';
import { useContador } from '../hooks/useContador';
import { BtnTouch } from '../components/BtnTouch';
import { Fab } from '../components/Fab';

export const MiSegundaScreen = () => {


    const { contador, add, decrement, reset } = useContador();

    return(
        <View
            style={ appTheme.marginGobal }
        >
            <TextoComponent
                texto={ contador }
            /> 
            <BtnTouch
                title='Agregar +1'
                background='#af69da'
                action={ () => add() }
            />
            <BtnTouch
                title='Agregar -1'
                background='rgba(118, 233, 247, 0.9)'
                action={ () => decrement() }
            />
            <BtnTouch
                title='Reset'
                background='hsl(157, 52%, 71%)'
                action={ () => reset() }
            />
            <Fab
                title='->'
                position='button-right'
                action={ () => console.log("algo") }
            />
            <Fab
                title='<-'
                position='button-left'
                action={ () => console.log("algo") }
            />
        </View>
    )
}
