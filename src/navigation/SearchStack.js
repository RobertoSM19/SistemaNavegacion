import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/Search/SearchScreen";
import {screens} from '../utils/screenNames';

const Stack=createNativeStackNavigator();

export default function mySearchStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={screens.search.search} component={SearchScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}