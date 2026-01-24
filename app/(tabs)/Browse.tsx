import { Moon, Sun } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Browse = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView className={`flex-1 ${darkMode ? "bg-slate-900" : "bg-slate-50"} px-6 pt-4 pb-4`}>
      <Text className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-black"}`}>Browse</Text>
      {/* Dark Mode Toggle */}
      <View className={`flex-row items-center gap-2 p-2 justify-between border border-t-1 border-b-1 border-l-0 border-gray-300 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
        <Text className={`text-lg font-bold ${darkMode ? "text-white" : "text-black"}`}>Theme</Text>
          <TouchableOpacity
            onPress={() => setDarkMode(!darkMode)}
            className={`p-2 mr-4 rounded-full ${darkMode ? 'bg-black/40' : 'bg-black/40'}`}
            >
            {darkMode ? (
              <Moon size={20} color="#FFD700" />
            ) : (
              <Sun size={20} color="#FFD700" />
            )}
          </TouchableOpacity>
      </View>

            {/* Refresh */}
    </SafeAreaView>
  );
};

export default Browse;
