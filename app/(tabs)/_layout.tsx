import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "red",
        tabBarActiveTintColor: "green",
        tabBarStyle: {
          backgroundColor: "#1e293b",
          borderTopColor: "gray",
          borderTopWidth: 1,
          paddingTop: 5,
          paddingBottom: 5,
          height: 90,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: 600 },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flash-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
