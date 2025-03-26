import React from 'react';
import { View, Text } from 'react-native';
import { appTheme } from '../../themes/appTheme';
import { Fab } from '../../components/Fab';
import { useNavigation } from '@react-navigation/native';

export const Screen1 = () => {

    const navigation = useNavigation();

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
