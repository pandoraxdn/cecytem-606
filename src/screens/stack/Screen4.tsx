import React from 'react';
import { View, Text } from 'react-native';
import { appTheme } from '../../themes/appTheme';
import { RootStackParams } from '../../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { BtnTouch } from '../../components/BtnTouch';

interface Props extends StackScreenProps<RootStackParams,'Screen4'>{};

export const Screen4 = ( {navigation, route}:Props ) => {

    const { username, email } = route.params;

    return(
        <View
            style={ appTheme.marginGobal }
        >
            <Text
                style={ appTheme.title }
            >
                { email } 
            </Text>
            <Text
                style={ appTheme.title }
            >
                { username } 
            </Text>
            <BtnTouch
                action={ () => navigation.goBack() }
                title='Regresar'
                background='violet'
            />
        </View>
    )
}
