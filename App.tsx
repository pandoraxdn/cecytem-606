import React from 'react';
//import { MiPrimerScreen } from './src/screens/MiPrimerScreen';
//import { MiSegundaScreen } from './src/screens/MiSegundaScreeen';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
//import { UseReducerScreen } from './src/screens/UseReducerScreen';
//import { UseReducerCustomHookScreen } from './src/screens/UseReducerCustomHookScreen';

const App = () => {
    return(
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    )
}

export default App;
