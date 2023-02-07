import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HeaderTitle } from "@react-navigation/elements";
import { StyleSheet, Text, Image, View } from "react-native";

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
          headerTitle: () => (
            <HeaderTitle>
              <View style={styles.headerContainer}>
                <Image
                  style={styles.headerImage}
                  source={require("../assets/heart_logo.png")}
                />
                <Text style={styles.headerTitle}>GameZone</Text>
              </View>
            </HeaderTitle>
          ),
          headerBackground: () => (
            <Image
              style={styles.headerBackground}
              source={require("../assets/game_bg.png")}
            />
          ),
        }}
      >
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    letterSpacing: 1,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerBackground: {
    width: "100%",
    height: "100%",
  },
});
