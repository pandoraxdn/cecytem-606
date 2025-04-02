import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Screen1 } from "../screens/stack/Screen1";
import { Screen2 } from "../screens/stack/Screen2";
import { Screen3 } from "../screens/stack/Screen3";
import { Screen4 } from "../screens/stack/Screen4";

export type RootStackParams = {
    Screen1:    undefined;
    Screen2:    undefined;
    Screen3:    undefined;
    Screen4:    { username: string, email: string };
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
            />
            <Stack.Screen
                name="Screen2"
                component={Screen2}
            />
            <Stack.Screen
                name="Screen3"
                component={Screen3}
            />
            <Stack.Screen
                name="Screen4"
                component={Screen4}
            />
        </Stack.Navigator>
    );
}
