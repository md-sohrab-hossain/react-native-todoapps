import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

const EmptyState = () => {
  const { colors } = useTheme();

  return (
    <View className="items-center justify-center py-20">
      <LinearGradient
        colors={colors.gradients.empty}
        style={{ borderRadius: 60 }}
        className="h-[120px] w-[120px] mb-6 items-center justify-center"
      >
        <Ionicons name="clipboard-outline" size={60} color={colors.textMuted} />
      </LinearGradient>
      <Text className={`text-[24px] font-bold mb-2 text-${colors.text}`}>
        No todos yet!
      </Text>
      <Text
        className={`text-[17px] text-center py-2 line-height-[24px] ${colors.textMuted}`}
      >
        Add your first todo above to get started
      </Text>
    </View>
  );
};
export default EmptyState;
