import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useMutation } from "convex/react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  const addTodo = useMutation(api.todos.addTodos);
  const clearTodos = useMutation(api.todos.clearAllTodos);

  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-4xl font-bold color-light-200">Welcome!</Text>
      <TouchableOpacity
        onPress={toggleDarkMode}
        className="p-4 mt-4 bg-blue-500 rounded"
      >
        <Text className="text-white">Toggle theme</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => addTodo({ text: "Learn React Native with Convex" })}
        className="p-4 mt-4 bg-blue-500 rounded"
      >
        <Text className="text-white">Add Todos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => clearTodos()}
        className="p-4 mt-4 bg-red-400 rounded"
      >
        <Text className="text-white">Clear Todos</Text>
      </TouchableOpacity>
    </View>
  );
}
