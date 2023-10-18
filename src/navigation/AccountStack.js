import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/Account/AccountScreen";
import {screens} from '../utils/screenNames';

const Stack=createNativeStackNavigator();

export default function myAccountStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={screens.account.account} component={AccountScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}