import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Screen1 } from "../screens/stack/Screen1";
import { Screen2 } from "../screens/stack/Screen2";
import { Screen3 } from "../screens/stack/Screen3";

export const StackNavigator = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
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
