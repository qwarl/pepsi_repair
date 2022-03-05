import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './src/screens/Home'
import Register from './src/screens/Register/Register'
import Success from './src/screens/Success/SuccessScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		// <View style={styles.test}>
		// 	{/* <Home /> */}
		// 	<Register />
		// 	{/* <Success /> */}
		// 	{/* <Api /> */}
		// 	{/* <SuccessScreen/> */}
		// </View>

		<NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              headerShown: false
            }}
            name="Home"
            component={Home} />
          <Stack.Screen
            options={{
              headerShown: false
            }}
            name="Register"
            component={Register} />
          <Stack.Screen
            options={{
              headerShown: false
            }}
            name="Success"
            component={Success} />
        </Stack.Navigator>
      </NavigationContainer>

	);
};

export default App;

const styles = StyleSheet.create({
	test: {
		flex: 1,
	}
});
