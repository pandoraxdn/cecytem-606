import React from 'react';
//import { MiPrimerScreen } from './src/screens/MiPrimerScreen';
//import { MiSegundaScreen } from './src/screens/MiSegundaScreeen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
//import { UseReducerScreen } from './src/screens/UseReducerScreen';
//import { UseReducerCustomHookScreen } from './src/screens/UseReducerCustomHookScreen';

const App = () => {
    return(
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}

export default App;
