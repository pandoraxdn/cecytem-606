import React from 'react';
import { View, Text } from 'react-native';
import { appTheme } from '../../themes/appTheme';
import { Fab } from '../../components/Fab';
import { RootStackParams } from '../../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { BtnTouch } from '../../components/BtnTouch';

interface Props extends StackScreenProps<RootStackParams,'Screen1'>{};

export const Screen1 = ( { navigation }:Props ) => {

    const alumno1 = {
        email: "perezlopes@gmail.com",
        username: "Mellany"
    }

    const alumno2 = {
        email: "dane@gmail.com",
        username: "Danae"
    }

    return(
        <View
            style={ appTheme.marginGobal }
        >
            <Text>
                Screen1
            </Text>
            <BtnTouch
                title={alumno1.username}
                background='violet'
                action={ () => navigation.navigate("Screen4",{ ...alumno1 }) }
            />
            <BtnTouch
                title={alumno2.username}
                background='violet'
                action={ () => navigation.navigate("Screen4",{ ...alumno2 }) }
            />
            <Fab
                title='->'
                position='button-right'
                action={ () =>  navigation.navigate("Screen2") }
            />
        </View>
    )
}
