import React from 'react';
import {View, Text} from 'react-native';

export const MiPrimerScreen = () => {

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "white",
				flexDirection: "column",
				justifyContent: "space-evenly",
				alignItems: "center"
			}}
		>
				<View
					style={{
						backgroundColor: "green",
						height: 100,
						width: 100,
						alignSelf: "flex-start"
					}}
				/>
				<View
					style={{
						backgroundColor: "yellow",
						height: 100,
						width: 100,
					}}
				/>
				<View
					style={{
						backgroundColor: "orange",
						height: 100,
						width: 100,
						alignSelf: "flex-start"
					}}
				/>
		</View>
	);
}
