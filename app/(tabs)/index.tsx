import EmptyState from "@/components/EmptyList";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import TodoListItem from "@/components/TodoListItem";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useTheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, FlatList, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { colors } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const updateTodo = useMutation(api.todos.updateTodo);

  const isLoading = todos === undefined;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleToggleTodo = async (id: Id<"todos">) => {
    try {
      await toggleTodo({ id });
    } catch (error) {
      console.log("Error toggling todo", error);
      Alert.alert("Error", "Failed to toggle todo");
    }
  };

  const handleDeleteTodo = async (id: Id<"todos">) => {
    try {
      Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: () => deleteTodo({ id }),
        },
      ]);
    } catch (error) {
      console.log("Error deleting todo", error);
      Alert.alert("Error", "Failed to delete todo");
    }
  };

  const handleSaveEdit = async (id: Id<"todos">, text: string) => {
    try {
      await updateTodo({ id, text: text.trim() });
    } catch (error) {
      console.log("Error updating todo", error);
      Alert.alert("Error", "Failed to update todo");
    }
  };

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
          renderItem={({ item }) => (
            <TodoListItem
              item={item}
              handleToggleTodo={handleToggleTodo}
              handleDeleteTodo={handleDeleteTodo}
              handleSaveEdit={handleSaveEdit}
            />
          )}
          ListEmptyComponent={<EmptyState />}
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
