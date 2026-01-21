import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Welcome to HabitFlow!</Text>
    </SafeAreaView> 
  );
}
