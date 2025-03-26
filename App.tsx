import React from 'react';
//import { MiPrimerScreen } from './src/screens/MiPrimerScreen';
//import { MiSegundaScreen } from './src/screens/MiSegundaScreeen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
	return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
	);
}

export default App;
