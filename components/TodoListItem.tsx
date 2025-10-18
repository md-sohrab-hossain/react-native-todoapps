import { Doc, Id } from "@/convex/_generated/dataModel";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import TodoButtonList from "./TodoButtonList";
import TodoListEditItem from "./TodoListEditItem";

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
          <TodoListEditItem
            editText={editText}
            editTodoId={editTodoId}
            setEditText={setEditText}
            setEditTodoId={setEditTodoId}
            handleSaveEdit={handleSaveEdit}
            handleCancelEdit={handleCancelEdit}
          />
        ) : (
          <TodoButtonList
            item={item}
            handleEdit={handleEdit}
            handleDeleteTodo={handleDeleteTodo}
          />
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
