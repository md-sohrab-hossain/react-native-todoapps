import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const { isDarkMode, toggleDarkMode, colors } = useTheme();

  return (
    <LinearGradient colors={colors.gradients.surface} style={styles.section}>
      <Text
        style={{ color: colors.text }}
        className="text-[20px] p-2 font-bold mb-3 tracking-tighter"
      >
        Preferences
      </Text>

      {/* DARK MODE */}
      <View
        style={{ borderBottomColor: colors.border }}
        className="flex-row justify-between items-center py-5 border-b-[1px]"
      >
        <View className="flex-row items-center flex-1">
          <LinearGradient
            colors={colors.gradients.primary}
            style={{ borderRadius: 8 }}
            className="items-center justify-center mr-4 w-9 h-9"
          >
            <Ionicons name="moon" size={18} color="#fff" />
          </LinearGradient>
          <Text
            className="text-[17px] font-bold"
            style={{ color: colors.text }}
          >
            Dark Mode
          </Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.primary }}
          ios_backgroundColor={colors.border}
        />
      </View>

      {/* NOTIFICATONS */}
      <View
        style={{ borderBottomColor: colors.border }}
        className="flex-row justify-between items-center py-5 border-b-[1px]"
      >
        <View className="flex-row items-center flex-1">
          <LinearGradient
            colors={colors.gradients.warning}
            style={{ borderRadius: 8 }}
            className="items-center justify-center mr-4 w-9 h-9"
          >
            <Ionicons name="notifications" size={18} color="#fff" />
          </LinearGradient>
          <Text
            className="text-[17px] font-bold"
            style={{ color: colors.text }}
          >
            Notifications
          </Text>
        </View>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={() =>
            setIsNotificationsEnabled(!isNotificationsEnabled)
          }
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.warning }}
          ios_backgroundColor={colors.border}
        />
      </View>

      {/* AUTO-SYNC */}
      <View
        style={{ borderBottomColor: colors.border }}
        className="flex-row justify-between items-center py-5 border-b-[1px]"
      >
        <View className="flex-row items-center flex-1">
          <LinearGradient
            colors={colors.gradients.success}
            style={{ borderRadius: 8 }}
            className="items-center justify-center mr-4 w-9 h-9"
          >
            <Ionicons name="notifications" size={18} color="#fff" />
          </LinearGradient>
          <Text
            className="text-[17px] font-bold"
            style={{ color: colors.text }}
          >
            Auto Sync
          </Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={() => setIsAutoSync(!isAutoSync)}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.success }}
          ios_backgroundColor={colors.border}
        />
      </View>
    </LinearGradient>
  );
};

export default Preferences;

const styles = StyleSheet.create({
  section: {
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginTop: 10,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8, // elevation is used to create a shadow on the section, in android
  },
  statCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
    borderLeftWidth: 4,
  },
});
