import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import HeaderLeft from '@/components/headerLeft';
import HeaderRight from '@/components/headerRight';
import { Colors } from '@/constants/Colors';
import Search from '../screens/search/Search'
import SearchHeaderRight from '../screens/search/SearchHeaderRight'
import SearchHeaderLeft from '../screens/search/SearchHeaderLeft';

const Stack = createNativeStackNavigator();


// Home
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: Colors.neutral.gray,
                    },
                    title: '',
                    headerLeft: () => (
                        <HeaderLeft />
                    ),
                    headerRight: () => (
                        <HeaderRight />
                    ),
                }}
            />
            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: Colors.neutral.gray,
                        height: 80,
                        justifyContent: 'space-between',
                    },
                    headerLeft: () => (
                        <SearchHeaderLeft />
                    ),
                    headerRight: () => (
                        <SearchHeaderRight />
                    ),
                }}
                
            />
        </Stack.Navigator>
    );
};

export default HomeStack;