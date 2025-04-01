import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Screen1 } from "../screens/stack/Screen1";
import { Screen2 } from "../screens/stack/Screen2";
import { Screen3 } from "../screens/stack/Screen3";

export type RootStackParams = {
    Screen1:    undefined;
    Screen2:    undefined;
    Screen3:    undefined;
}

export const StackNavigator = () => {

    const Stack = createStackNavigator<RootStackParams>();

    return (
        <Stack.Navigator
            initialRouteName="Screen1"
            screenOptions={{
                headerMode: "float",
                headerShown: true,
                headerStyle:{
                    height: 40,
                    shadowColor: "violet",
                    borderColor: "black",
                    backgroundColor: "rgb(229, 53, 141)",
                    borderWidth: 4,
                    borderRadius: 20,
                    opacity: 0.6
                },
                headerTitleStyle:{
                    fontWeight: "bold",
                    color: "white"
                },
                headerTintColor: "white",
                cardStyle:{
                    backgroundColor: "white"
                }
            }}
        >
            <Stack.Screen
                name="Screen1"
                component={Screen1}
                options={{ title: "Página 1" }}
            />
            <Stack.Screen
                name="Screen2"
                component={Screen2}
                options={{ title: "Página 2" }}
            />
            <Stack.Screen
                name="Screen3"
                component={Screen3}
                options={{ title: "Página 3" }}
            />
        </Stack.Navigator>
    );
}
