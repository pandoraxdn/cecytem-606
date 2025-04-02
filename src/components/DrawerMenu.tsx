import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { appTheme } from '../themes/appTheme';

export const DrawerMenu = ( {navigation}:DrawerContentComponentProps ) => {

    const [ background, setBackground ] = useState("white");

    const colors:string[] = [ "rgb(207, 178, 255)", "rgb(237, 22, 35)", "rgb(237, 22, 129)", "rgb(87, 164, 203)" ];

    const random = () => {
        const color = colors[ Math.floor( Math.random() * colors.length ) ];
        setBackground( color );

    }

    useEffect( () => {
        const interval = setInterval(() => {
            random();
            return () => clearInterval(interval);
        },300);
    }, []);


    return(
        <DrawerContentScrollView>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <View>
                    <Image
                        source={{
                            uri: 'https://th.bing.com/th/id/OIP.7hCmqzXdPXDPo34V5MabegHaHa?rs=1&pid=ImgDetMain'
                        }}
                        style={{
                            height: 200,
                            width: 200,
                            marginTop: 20,
                            borderRadius: 100,
                            borderWidth: 10,
                            borderColor: background,
                            marginBottom: 5
                        }}
                    />
                    <Text
                        style={appTheme.title}
                    >
                        Username
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("StackNavigator") }
                    >
                        <View
                            style={{
                                marginVertical: 10,
                                backgroundColor: "rgba(64, 153, 116, 0.7)",
                                borderRadius: 100,
                                width: 200,
                                alignItems: "center"
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    textAlign: "center"
                                }}
                            >
                                StackNavigator
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("MiPrimerScreen") }
                    >
                        <View
                            style={{
                                marginVertical: 10,
                                backgroundColor: "rgba(64, 153, 116, 0.7)",
                                borderRadius: 100,
                                width: 200,
                                alignItems: "center"
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 18,
                                    fontWeight: "bold"
                                }}
                            >
                                MiPrimerScreen
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const style = StyleSheet.create({

});

