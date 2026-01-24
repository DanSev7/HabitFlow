import {
  Bell,
  BellOff,
  Flame,
  Moon,
  Plus,
  RefreshCcw,
  Sun,
} from "lucide-react-native";
import { useEffect, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";

import CircularProgress from "@/components/CircularProgress";
import TodoCard from "@/components/TodoCard";

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [streak, setStreak] = useState(7); // Example streak count
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const handleRefresh = () =>
    Alert.alert("Sync", "Refresh your daily protocol?", [
      { text: "Cancel", style: "cancel" },
      { text: "Update", onPress: () => console.log("Refreshed") },
    ]);

  return (
    <View className={`flex-1 ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
      {/* Header Section */}
      <View className="relative justify-between mb-6 h-72 px-6 pt-12 pb-8 bg-primary rounded-b-[3rem] shadow-2xl">
        <View className="flex-row items-start justify-between">
          <View>
            <Text className="text-4xl text-white font-black mt-1">
              Daily Task
            </Text>
            <Text className="text-white/80 font-medium uppercase tracking-wider text-xs">
              {now.toLocaleDateString("en-US", dateOptions)}
            </Text>
          </View>

          {/* Icon Toolbar */}
          <View className="flex-row items-center gap-3 p-2 rounded-3xl">
            {/* Streak Counter */}
            <View className={`flex flex-row items-center gap-1 px-2 py-1 rounded-full ${darkMode ? 'bg-orange-900/40 text-orange-400' : 'bg-orange-400/30 text-white'}`}>
              <Flame size={20} color="#FFD700" fill="#FFD700" />
              <Text className={`text-white text-xs font-bold ${darkMode ? 'text-orange-400' : 'text-white'}`}>{streak}</Text>
            </View>

            {/* Notification Toggle */}   
            <TouchableOpacity
              onPress={() => setNotificationsOn(!notificationsOn)}
              className={`p-2 rounded-full ${darkMode ? 'bg-white/40' : 'bg-white/40'}`}
            >
              {notificationsOn ? (
                <Bell size={20} color="white" />
              ) : (
                <BellOff size={20} color="white" opacity={0.9} />
              )}
            </TouchableOpacity>

            {/* Dark Mode Toggle */}
            {/* <TouchableOpacity
              onPress={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-white/40' : 'bg-white/40'}`}
            >
              {darkMode ? (
                <Moon size={20} color="white" />
              ) : (
                <Sun size={20} color="white" />
              )}
            </TouchableOpacity> */}

            {/* Refresh */}
            <TouchableOpacity onPress={handleRefresh} className={`p-2 rounded-full ${darkMode ? 'bg-white/40' : 'bg-white/40'}`}>
              <RefreshCcw size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row items-end justify-between">
          <View>
            <Text className="text-white font-black text-6xl tracking-tighter">
              {now.toLocaleTimeString("en-US", timeOptions).split(" ")[0]}
              <Text className="text-2xl opacity-70">
                {now.toLocaleTimeString("en-US", timeOptions).split(" ")[1]}
              </Text>
            </Text>
          </View>

          <View className="items-center">
            <CircularProgress
              percentage={65}
              size={85}
              strokeWidth={8}
              color="#ffffff"
            />
            <Text className="text-white/70 text-[10px] font-bold mt-2 uppercase">
              Progress
            </Text>
          </View>
        </View>
      </View>

      {/* List Section */}
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => item.toString()}
        renderItem={() => <TodoCard />}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity
        activeOpacity={0.8}
        className="absolute bottom-24 right-6 h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-2xl elevation-8"
        onPress={() => Alert.alert("New Habit")}
      >
        <Plus size={32} color="white" strokeWidth={3} />
      </TouchableOpacity>
    </View>
  );
}
