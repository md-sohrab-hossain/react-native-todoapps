import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { colors } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  const isLoading = todos === undefined;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <LinearGradient colors={colors.gradients.background} className="flex-1">
      <StatusBar barStyle={colors.statusBarStyle} />

      <SafeAreaView className="flex-1">
        <Header />
        <TodoInput />

        <FlatList
          data={todos}
          className="flex-1"
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.todoListContent}
          renderItem={({ item }) => <Text>{item.text}</Text>}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  todoListContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
});
