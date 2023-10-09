import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import accountScreen from "../screens/AccountScreen";
import favoriteScreen from "../screens/FavoriteScreen";
import rankingScreen from "../screens/RankingScreen";
import restaurantScreen from "../screens/RestaurantScreen";
import searchScreen from "../screens/SearchScreen";
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const Tab=createBottomTabNavigator();

export default function AppNavigation(){
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Account') {
                iconName = 'home-outline';
            } else if (route.name === 'Favorite') {
                iconName =  'heart-outline';
            } else if (route.name === 'Ranking') {
                iconName = 'star-outline';
            } else if (route.name === 'Restaurant') {
                iconName = 'compass-outline';
            } else if (route.name === 'Search') {
                iconName = 'search-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'black',
            }}>
            <Tab.Screen name="Account" component={accountScreen}/>
            <Tab.Screen name="Favorite" component={favoriteScreen}/>
            <Tab.Screen name="Ranking" component={rankingScreen}/>
            <Tab.Screen name="Restaurant" component={restaurantScreen}/>
            <Tab.Screen name="Search" component={searchScreen}/>
        </Tab.Navigator>
    )
}