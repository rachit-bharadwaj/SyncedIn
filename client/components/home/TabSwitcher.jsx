import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// screens
import { Connections, Following } from "../../screens/feed";

// colors
import colors from "../../constants/colors";

const Tab = createMaterialTopTabNavigator();

const TabSwitcher = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.primary[600],
          shadowColor: "transparent",
        },

        tabBarIndicatorStyle: {
          backgroundColor: colors.primary[300],
          height: 5,
          borderRadius: 10,
        },

        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
          color: colors.primary[100],
          textTransform: "capitalize",
        },
      }}
    >
      <Tab.Screen name="Following" component={Following} />
      <Tab.Screen name="Connections" component={Connections} />
    </Tab.Navigator>
  );
};

export default TabSwitcher;
