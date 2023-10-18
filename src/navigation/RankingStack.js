import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RankingScreen from "../screens/Ranking/RankingScreen";
import {screens} from '../utils/screenNames';

const Stack=createNativeStackNavigator();

export default function myRankingStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={screens.ranking.ranking} component={RankingScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}