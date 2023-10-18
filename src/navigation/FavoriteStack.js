import { createNativeStackNavigator } from "@react-navigation/native-stack";
import favoriteScreen from "../screens/Favorite/FavoriteScreen";
import {screens} from '../utils/screenNames';

const Stack=createNativeStackNavigator();

export default function myFavoriteStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={screens.favorites.favorites} component={favoriteScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}