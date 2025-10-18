import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProgressStats = () => {
  const { colors } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  const totalTodos = todos?.length || 0;
  const completedTodos = todos?.filter((todo) => todo.isCompleted)?.length || 0;
  const activeTodos = totalTodos - completedTodos;

  return (
    <LinearGradient colors={colors.gradients.surface} style={styles.section}>
      <Text
        style={{ color: colors.text }}
        className="text-[20px] p-2 font-bold mb-3 tracking-tighter"
      >
        Progress Stats
      </Text>

      <View className="gap-4">
        {/* TOTAL TODOS */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[styles.statCard, { borderLeftColor: colors.primary }]}
        >
          <View className="mr-4">
            <LinearGradient
              colors={colors.gradients.primary}
              style={styles.statIcon}
            >
              <Ionicons name="list" size={20} color="#fff" />
            </LinearGradient>
          </View>

          <View>
            <Text
              style={{ color: colors.textMuted }}
              className="text-[28px] font-extrabold mt-[2px] tracking-tighter "
            >
              {totalTodos}
            </Text>
            <Text
              style={{ color: colors.textMuted }}
              className="text-sm  font-semibold mt-[2px] "
            >
              Total Todos
            </Text>
          </View>
        </LinearGradient>

        {/* COMPLETED TODOS */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[styles.statCard, { borderLeftColor: colors.success }]}
        >
          <View className="mr-4">
            <LinearGradient
              colors={colors.gradients.success}
              style={styles.statIcon}
            >
              <Ionicons name="checkmark-circle" size={20} color="#fff" />
            </LinearGradient>
          </View>

          <View>
            <Text
              style={{ color: colors.textMuted }}
              className="text-[28px] font-extrabold mt-[2px] tracking-tighter"
            >
              {completedTodos}
            </Text>
            <Text
              style={{ color: colors.textMuted }}
              className="text-sm  font-semibold mt-[2px]"
            >
              Completed
            </Text>
          </View>
        </LinearGradient>

        {/* ACTIVE TODOS */}

        <LinearGradient
          colors={colors.gradients.background}
          style={[styles.statCard, { borderLeftColor: colors.warning }]}
        >
          <View className="mr-4">
            <LinearGradient
              colors={colors.gradients.warning}
              style={styles.statIcon}
            >
              <Ionicons name="time" size={20} color="#fff" />
            </LinearGradient>
          </View>

          <View>
            <Text
              style={{ color: colors.textMuted }}
              className="text-[28px] font-extrabold mt-[2px] tracking-tighter"
            >
              {activeTodos}
            </Text>
            <Text
              style={{ color: colors.textMuted }}
              className="text-sm  font-semibold mt-[2px]"
            >
              Active
            </Text>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default ProgressStats;

const styles = StyleSheet.create({
  section: {
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginTop: 10,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8, // elevation is used to create a shadow on the section, in android
  },
  statCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
    borderLeftWidth: 4,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
