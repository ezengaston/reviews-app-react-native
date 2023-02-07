import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
        },
      }}
    >
      <Stack.Screen
        name="Home Stack"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          headerTitle: "Review Details",
          headerBackTitle: "Home",
        }}
      />
    </Stack.Navigator>
  );
}
