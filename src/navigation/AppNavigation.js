import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import myAccountStack from "./AccountStack";
import myFavoriteStack from "./FavoriteStack";
import myRankingStack from "./RankingStack";
import mySearchStack from "./SearchStack";
import myRestaurantStack from "./RestaurantStack";
import {screens} from "../utils/screenNames";
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const Tab=createBottomTabNavigator();

export default function AppNavigation(){
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === screens.account.tab) {
                iconName = 'home-outline';
            } else if (route.name === screens.favorites.tab) {
                iconName =  'heart-outline';
            } else if (route.name === screens.ranking.tab) {
                iconName = 'star-outline';
            } else if (route.name === screens.restaurants.tab) {
                iconName = 'compass-outline';
            } else if (route.name === screens.search.tab) {
                iconName = 'search-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'black',
            }}>
            <Tab.Screen name={screens.restaurants.tab} component={myRestaurantStack} options={{title:screens.restaurants.restaurants}}/>
            <Tab.Screen name={screens.favorites.tab} component={myFavoriteStack} options={{title:screens.restaurants.restaurants}}/>
            <Tab.Screen name={screens.ranking.tab} component={myRankingStack} options={{title:screens.restaurants.restaurants}}/>
            <Tab.Screen name={screens.search.tab} component={mySearchStack} options={{title:screens.restaurants.restaurants}}/>
            <Tab.Screen name={screens.account.tab} component={myAccountStack} options={{title:screens.restaurants.restaurants}}/>
        </Tab.Navigator>
    )
}