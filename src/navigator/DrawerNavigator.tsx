import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { MiPrimerScreen } from "../screens/MiPrimerScreen";
import { useWindowDimensions } from "react-native";
import { DrawerMenu } from "../components/DrawerMenu";

export type RootDrawerParams = {
    StackNavigator: undefined;
    MiPrimerScreen: undefined;
}

export const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator<RootDrawerParams>();

    const { width } = useWindowDimensions();

    return(
        <Drawer.Navigator
            initialRouteName="StackNavigator"
            screenOptions={{
                headerShown: true,
                drawerPosition: "right",
                drawerType: ( width > 700 ) ? 'permanent' : 'front',
                overlayColor: "rgba(194, 48, 121,0.4)",
                drawerStyle: {
                    backgroundColor: 'rgba(139, 224, 145,0.95)',
                    width: width * 0.7,
                }
            }}
            drawerContent={ (props) => <DrawerMenu {...props}/> }
        >
            <Drawer.Screen
                name="StackNavigator"
                component={ StackNavigator }
            />
            <Drawer.Screen
                name="MiPrimerScreen"
                component={ MiPrimerScreen }
            />
        </Drawer.Navigator>
    );
}
