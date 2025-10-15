import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import { useTheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { colors } = useTheme();

  return (
    <LinearGradient colors={colors.gradients.background} className="flex-1">
      <StatusBar barStyle={colors.statusBarStyle} />

      <SafeAreaView className="flex-1">
        <Header />
        <TodoInput />
      </SafeAreaView>
    </LinearGradient>
  );
}
