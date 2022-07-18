import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Cats from '../containers/Cats';
import Chat from '../containers/Chat';
import Profile from '../containers/Profile';
import CustomBar from './CustomBottomTabs';

const Tab = createBottomTabNavigator();

export default function RootNavigation() {
    return (
        <Tab.Navigator tabBar={CustomBar} screenOptions={{ headerShown: false, }}>
            <Tab.Screen name="Cats" component={Cats} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
