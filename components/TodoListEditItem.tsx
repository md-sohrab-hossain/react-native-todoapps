import { Id } from "@/convex/_generated/dataModel";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface TodoListEditItemProps {
  editText: string;
  editTodoId: Id<"todos">;
  handleCancelEdit: () => void;
  setEditText: (text: string) => void;
  setEditTodoId: (id: Id<"todos"> | null) => void;
  handleSaveEdit: (id: Id<"todos">, text: string) => void;
}

const TodoListEditItem = ({
  editText,
  editTodoId,
  setEditText,
  setEditTodoId,
  handleSaveEdit,
  handleCancelEdit,
}: TodoListEditItemProps) => {
  const { colors } = useTheme();

  return (
    <View className="flex-1">
      <TextInput
        style={{ borderRadius: 16 }}
        className={`border-2 px-4 py-3 text-[17px] text-medium mb-4 bg-[${colors.backgrounds.editInput}] border-[${colors.primary}] text-[${colors.text}]`}
        value={editText}
        onChangeText={setEditText}
        autoFocus
        multiline
        placeholder="Edit your todo..."
        placeholderTextColor={colors.textMuted}
      />
      <View className="flex-row gap-3">
        <TouchableOpacity
          onPress={() => {
            handleSaveEdit(editTodoId, editText);
            setEditTodoId(null);
            setEditText("");
          }}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={colors.gradients.success}
            style={{ borderRadius: 20 }}
            className="flex-row items-center gap-2 px-4 py-[10px]"
          >
            <Ionicons name="checkmark" size={16} color="#fff" />
            <Text className="text-sm font-semibold text-white">Save</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancelEdit} activeOpacity={0.8}>
          <LinearGradient
            colors={colors.gradients.muted}
            style={{ borderRadius: 20 }}
            className="flex-row items-center gap-2 px-4 py-[10px]"
          >
            <Ionicons name="close" size={16} color="#fff" />
            <Text className="text-sm font-semibold text-white">Cancel</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoListEditItem;
