import icons from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => {
  return (
    <View className="flex-1 mt-2 flex flex-col items-center ">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={focused ? "#ff0000ff" : "#d8d8d8ff"}
        className="size-7"
      />
      <Text
        className={`text-sm w-full text-center ${
          focused ? "text-primary font-bold" : "text-inactive font-medium"
        }`}
      >
        {title}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#242424ff",
          position: "absolute",
          height: 70,
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Today",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.today} title="Today" />
          ),
        }}
      />
      <Tabs.Screen
        name="Upcoming"
        options={{
          title: "Upcoming",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.upcoming} title="Upcoming" />
          ),
        }}
      />
      <Tabs.Screen
        name="Browse"
        options={{
          title: "Browse",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.browse} title="Browse" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
