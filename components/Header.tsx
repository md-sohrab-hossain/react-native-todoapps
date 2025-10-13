import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  const { colors } = useTheme();
  const todos = useQuery(api.todos.getTodos);
  const completedTodos = todos?.filter((todo) => todo.isCompleted).length || 0;
  const totalTodos = todos?.length || 0;
  const progressPercentage =
    totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;

  return (
    <View className="px-6 py-8 pb-6">
      <View className="flex-row items-center mb-5">
        <LinearGradient
          colors={colors.gradients.primary}
          style={styles.iconContainer}
        >
          <Ionicons name="flash-outline" size={28} color="#fff" />
        </LinearGradient>

        <View className="flex-1">
          <Text
            className="text-3xl font-bold tracking-[-1px] mb-[2px]"
            style={{ color: colors.text }}
          >
            Today&apos;s Tasks 👀
          </Text>
          <Text
            className="text-[17px] font-medium"
            style={{ color: colors.textMuted }}
          >
            {completedTodos} of {totalTodos} completed
          </Text>
        </View>
      </View>

      <View className="mt-2">
        <View className="flex-row items-center gap-4">
          <View
            className="flex-1 h-3 rounded-[6px] overflow-hidden"
            style={{ backgroundColor: colors.border }}
          >
            <LinearGradient
              colors={colors.gradients.success}
              style={[styles.progressFill, { width: `${progressPercentage}%` }]}
            />
          </View>
          <Text
            className="font-bold text-right min-w-10"
            style={{ color: colors.success }}
          >
            {Math.round(progressPercentage)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  progressFill: {
    height: "100%",
    borderRadius: 6,
  },
});

export default Header;
