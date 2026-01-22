import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-start">
        <Text className="text-lg font-bold ml-4">
          Today
        </Text>
        <Text className="ml-4">
          3 tasks
        </Text>
        <View className="items-end">
          <Text>1</Text>
        </View>
      </View>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold">Welcome to HabitFlow!</Text>
      </View>
    </SafeAreaView>
  );
}
