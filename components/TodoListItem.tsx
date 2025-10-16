import { Doc, Id } from "@/convex/_generated/dataModel";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface TodoProps {
  item: Doc<"todos">;
  handleToggleTodo: (id: Id<"todos">) => void;
  handleDeleteTodo: (id: Id<"todos">) => void;
  handleSaveEdit: (id: Id<"todos">, text: string) => void;
}

const TodoListItem = ({
  item,
  handleToggleTodo,
  handleDeleteTodo,
  handleSaveEdit,
}: TodoProps) => {
  const { colors } = useTheme();
  const [editText, setEditText] = useState("");
  const [editTodoId, setEditTodoId] = useState<Id<"todos"> | null>(null);

  const handleEdit = (item: Doc<"todos">) => {
    setEditTodoId(item._id);
    setEditText(item.text);
  };

  const handleCancelEdit = () => {
    setEditTodoId(null);
    setEditText("");
  };

  return (
    <View className="my-3">
      <LinearGradient
        colors={colors.gradients.surface}
        style={styles.todoItem}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          className="mr-4 mt-0.5"
          onPress={() => handleToggleTodo(item._id)}
        >
          <LinearGradient
            colors={
              item.isCompleted
                ? colors.gradients.success
                : colors.gradients.muted
            }
            style={[
              styles.checkboxInner,
              { borderColor: item.isCompleted ? "transparent" : colors.border },
            ]}
          >
            {item.isCompleted && (
              <Ionicons name="checkmark" size={18} color="#fff" />
            )}
          </LinearGradient>
        </TouchableOpacity>

        {editTodoId === item._id ? (
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
                  <Text className="text-white text-sm font-semibold">Save</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleCancelEdit} activeOpacity={0.8}>
                <LinearGradient
                  colors={colors.gradients.muted}
                  style={{ borderRadius: 20 }}
                  className="flex-row items-center gap-2 px-4 py-[10px]"
                >
                  <Ionicons name="close" size={16} color="#fff" />
                  <Text className="text-white text-sm font-semibold">
                    Cancel
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <>
            <View className="flex-1 mt-1">
              <Text
                className={`text-[17px] font-medium text-${colors.text} ${item.isCompleted ? `line-through text-${colors.textMuted} opacity-60` : ""}`}
              >
                {item.text}
              </Text>
            </View>

            <View className="flex-row gap-3">
              <TouchableOpacity
                onPress={() => handleEdit(item)}
                activeOpacity={0.8}
              >
                <LinearGradient
                  style={{ borderRadius: 20 }}
                  colors={colors.gradients.warning}
                  className="w-10 h-10 items-center justify-center"
                >
                  <Ionicons name="pencil" size={14} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleDeleteTodo(item._id)}
                activeOpacity={0.8}
              >
                <LinearGradient
                  style={{ borderRadius: 20 }}
                  colors={colors.gradients.danger}
                  className="w-10 h-10 items-center justify-center"
                >
                  <Ionicons name="trash" size={14} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </>
        )}
      </LinearGradient>
    </View>
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  checkboxInner: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
