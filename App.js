// import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from './app/screens/ProfileScreen';
import ReposScreen from './app/screens/ReposScreen';
import FollowingScreen from './app/screens/FollowingScreen';
import FollowersScreen from './app/screens/FollowersScreen';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Repos" component={ReposScreen} />
        <Tab.Screen name="Following" component={FollowingScreen} />
        <Tab.Screen name="Followers" component={FollowersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
