import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "./homeStack";
import About from "../screens/about";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#eee",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{ headerTitle: "GameZone" }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{ headerTitle: "GameZone" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
