import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const SettingsHeader = () => {
  const { colors } = useTheme();

  return (
    <View className="px-6 py-8 pb-8">
      <View className="flex-row items-center">
        <LinearGradient
          colors={colors.gradients.primary}
          className="items-center justify-center mr-4 w-14 h-14"
          style={{ borderRadius: 16 }}
        >
          <Ionicons name="settings" size={28} color="#ffffff" />
        </LinearGradient>
        <Text
          style={{ color: colors.text }}
          className="text-[32px] font-bold tracking-tighter"
        >
          Settings
        </Text>
      </View>
    </View>
  );
};

export default SettingsHeader;
