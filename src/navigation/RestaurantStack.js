import { createNativeStackNavigator } from '@react-navigation/native-stack';
import restaurantScreen from '../screens/Restaurants/RestaurantScreen';
import {screens} from '../utils/screenNames';

const Stack = createNativeStackNavigator();

export default function myRestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.restaurants.restaurants} component={restaurantScreen}/>
      <Stack.Screen name={screens.restaurants.add_restaurant} component={restaurantScreen}/>
    </Stack.Navigator>
  );
}