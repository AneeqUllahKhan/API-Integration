import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Home from './Home';
import Details from './Details';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home! sdsd</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({name, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = name ? 'home' : 'home';
            } if (route.name === 'Settings') {
              iconName = name ? 'home' : 'settings';
            } else if (route.name === 'Details') {
                iconName = name ? 'settings' : 'shopping-cart';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen
          name="Details"
          component={Details}
        />
         <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{tabBarBadge: 3}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

