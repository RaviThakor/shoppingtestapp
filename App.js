/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import Dashboard from './src/Dashboard';
import Favourite from './src/Favourite';
import CategoryDetail from './src/CategoryDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Favourite') {
            iconName = focused
              ? 'heart'
              : 'heart';
          } else if (route.name === 'DashboardStack') {
            iconName = focused ? 'home' : 'home';
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='DashboardStack' component={DashboardStack} options={{ headerShown: false }} />
      <Tab.Screen name='Favourite' component={Favourite} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const DashboardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
      <Stack.Screen name='CategoryDetail' component={CategoryDetail} 
        options={{headerTransparent: true, headerTitleStyle: {color: '#fff'}, headerTitleAlign: 'center',
        headerTintColor: '#fff'
        }}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen
          name='Home'
          component={TabNavigation}
          options={{ 
            headerRightContainerStyle: {paddingRight: 10},
            headerTitle: '',
            headerRight: () => (
              <Ionicons name='notifications-outline' size={25} />
            ),
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
