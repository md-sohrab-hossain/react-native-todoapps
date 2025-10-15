import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";

const TodoInput = () => {
  const { colors } = useTheme();
  const [newTodo, setNewTodo] = useState("");
  const addTodo = useMutation(api.todos.addTodos);

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      Alert.alert("Confirm", "Do you want to add this todo?", [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Add",
          onPress: async () => {
            try {
              await addTodo({ text: newTodo.trim() });
              setNewTodo("");
            } catch (error) {
              console.log("Error adding a todo", error);
              Alert.alert("Error", "Failed to add todo");
            }
          },
        },
      ]);
    }
  };

  return (
    <View className="px-6 pb-3">
      <View className="flex-row items-end gap-4">
        <TextInput
          className="flex-1 rounded-[20px] border-2 px-5 py-4 text-[17px] max-h-[120px] fond-medium"
          placeholder="What needs to be done?"
          style={{
            backgroundColor: colors.backgrounds.input,
            borderColor: colors.border,
            color: colors.text,
          }}
          value={newTodo}
          onChangeText={setNewTodo}
          onSubmitEditing={handleAddTodo}
          placeholderTextColor={colors.textMuted}
        />

        <TouchableOpacity
          onPress={handleAddTodo}
          activeOpacity={0.8}
          disabled={!newTodo.trim()}
        >
          <LinearGradient
            colors={
              newTodo.trim() ? colors.gradients.primary : colors.gradients.muted
            }
            style={{ borderRadius: 28 }}
            className={`w-14 h-14 items-center justify-center ${!newTodo.trim() && "opacity-50"}`}
          >
            <Ionicons name="add" size={24} color="#ffffff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoInput;
