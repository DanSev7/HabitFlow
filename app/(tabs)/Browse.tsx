import { Clock, Flame, Moon, Sun } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Browse = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView className={`flex-1 ${darkMode ? "bg-slate-900" : "bg-slate-50"} px-6 pt-4 pb-4`}>
      <Text className={`text-2xl font-bold mb-8 ${darkMode ? "text-white" : "text-black"}`}>Explore Routines</Text>
      {/* Dark Mode Toggle */}
      <Text className={`text-md mb-4 uppercase font-bold ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Preferences</Text>
      <View className={`flex-row items-center gap-2 p-2 justify-between border p-3 rounded-2xl border-1 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-100"}`}>
        <Text className={`text-lg font-bold ${darkMode ? "text-white" : "text-black"}`}>App Theme</Text>
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

      {/* Stats */}
      <View>
        <Text className={`text-xl mt-8 mb-4 font-bold ${darkMode ? "text-white" : "text-black"}`}>Stats</Text>
        <View className={`flex-col gap-2 p-2 justify-between border p-3 rounded-2xl border-1 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-100"}`}>
          <View className="flex-row items-center gap-2">
            <Clock
                size={20}
                color={darkMode ? "#00ff1eff" : "#00ff1eff"}
                className="rounded-2xl bg-[#00ff1eff] p-2"
                />
            <Text className={`text-lg font-bold ${darkMode ? "text-white" : "text-black"}`}>Total Task Completed</Text>
            <Text className={`text-lg font-bold ${darkMode ? "text-white" : "text-black"}`}>100</Text>
          </View>

          <View className="flex-row items-center gap-2">
            <Flame
                size={20}
                color={darkMode ? "#FFD700" : "#FFD700"}
                className="rounded-2xl bg-[#00ff1eff] p-2"
                />
            <Text className={`text-lg font-bold ${darkMode ? "text-white" : "text-black"}`}>Current Streak</Text>
            <Text className={`text-lg font-bold ${darkMode ? "text-white" : "text-black"}`}>10 Days</Text>
          </View>

          <View className="flex-row items-center gap-2">
            <Flame
                size={20}
                color={darkMode ? "#FFD700" : "#FFD700"}
                className="rounded-2xl bg-[#00ff1eff] p-2"
                />
            <Text className={`text-lg font-bold ${darkMode ? "text-white" : "text-black"}`}>Longest Streak</Text>
            <Text className={`text-lg font-bold ${darkMode ? "text-white" : "text-black"}`}>10 Days</Text>
          </View>
        </View>
      </View>

      {/* Refresh */}
    </SafeAreaView>
  );
};

export default Browse;
