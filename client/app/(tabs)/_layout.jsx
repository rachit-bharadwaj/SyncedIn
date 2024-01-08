import { Tabs } from "expo-router";

// icons
import {
  AntDesign,
  MaterialIcons,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

// colors
import colors from "../../constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.primary[600],
          shadowColor: "transparent",
          borderColor: "transparent",
          marginBottom: 15,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="home" size={30} color={colors.secondary[100]} />
            ) : (
              <AntDesign name="home" size={30} color={colors.primary[300]} />
            ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons
                name="explore"
                size={30}
                color={colors.secondary[100]}
              />
            ) : (
              <MaterialIcons
                name="explore"
                size={30}
                color={colors.primary[300]}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign
                name="plussquare"
                size={30}
                color={colors.secondary[100]}
              />
            ) : (
              <AntDesign
                name="plussquare"
                size={30}
                color={colors.primary[300]}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Fontisto
                name="bell-alt"
                size={25}
                color={colors.secondary[100]}
              />
            ) : (
              <Fontisto name="bell-alt" size={25} color={colors.primary[300]} />
            ),
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="briefcase-variant"
                size={32}
                color={colors.secondary[100]}
              />
            ) : (
              <MaterialCommunityIcons
                name="briefcase-variant"
                size={32}
                color={colors.primary[300]}
              />
            ),
        }}
      />
    </Tabs>
  );
}
