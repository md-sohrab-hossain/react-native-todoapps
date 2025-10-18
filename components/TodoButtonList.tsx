import { Doc, Id } from "@/convex/_generated/dataModel";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface TodoButtonListProps {
  item: Doc<"todos">;
  handleEdit: (item: Doc<"todos">) => void;
  handleDeleteTodo: (id: Id<"todos">) => void;
}

const TodoButtonList = ({
  item,
  handleEdit,
  handleDeleteTodo,
}: TodoButtonListProps) => {
  const { colors } = useTheme();

  return (
    <>
      <View className="flex-1 mt-1">
        <Text
          className={`text-[17px] font-medium text-${colors.text} ${item.isCompleted ? `line-through text-${colors.textMuted} opacity-60` : ""}`}
        >
          {item.text}
        </Text>
      </View>

      <View className="flex-row gap-3">
        <TouchableOpacity onPress={() => handleEdit(item)} activeOpacity={0.8}>
          <LinearGradient
            style={{ borderRadius: 20 }}
            colors={colors.gradients.warning}
            className="items-center justify-center w-10 h-10"
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
            className="items-center justify-center w-10 h-10"
          >
            <Ionicons name="trash" size={14} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TodoButtonList;
