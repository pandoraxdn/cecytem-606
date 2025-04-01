import React from 'react';
import { View, Text } from 'react-native';
import { appTheme } from '../../themes/appTheme';
import { Fab } from '../../components/Fab';
import { RootStackParams } from '../../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParams,'Screen1'>{};

export const Screen1 = ( { navigation }:Props ) => {

    return(
        <View
            style={ appTheme.marginGobal }
        >
            <Text>
                Screen1
            </Text>
            <Fab
                title='->'
                position='button-right'
                action={ () =>  navigation.navigate("Screen2") }
            />
        </View>
    )
}
