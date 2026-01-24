import CircularProgress from "@/components/CircularProgress";
import TodoCard from "@/components/TodoCard";
import icons from "@/constants/icons";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
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

  const handleRefresh = () => {
    Alert.alert("Refresh", "Are you sure you want to refresh?", [
      { text: "Cancel", style: "cancel" },
      { text: "Yes", onPress: () => console.log("Refresh") },
    ]);
  };

  const handleAdd = () => {
    Alert.alert("Add", "Are you sure you want to add?", [
      { text: "Cancel", style: "cancel" },
      { text: "Yes", onPress: () => console.log("Add") },
    ]);
  };

  return (
    <View className="flex-1 bg-white ">
      {/* Header Section */}
      <View className="relative justify-between mb-4 h-64 px-6 pt-10 pb-6 bg-primary rounded-b-[2.5rem] shadow-lg elevation-5">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-3xl text-white font-extrabold">
              Daily Protocol
            </Text>
            <Text className="text-white">
              {now.toLocaleDateString("en-US", dateOptions)}
            </Text>
          </View>
          <View className="flex-row gap-2">
            <TouchableOpacity
              className="p-2 rounded-full bg-white/40"
              onPress={() => setDarkMode(!darkMode)}
            >
              <Image
                source={darkMode ? icons.moon : icons.sun}
                resizeMode="contain"
                tintColor={"#ececec"}
                className="size-5"
              />
            </TouchableOpacity>

            <TouchableOpacity
              className="p-2 rounded-full bg-white/40"
              onPress={() => {
                handleRefresh();
              }}
            >
              <Image
                source={icons.refresh}
                resizeMode="contain"
                tintColor={"#ececec"}
                className="size-5"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-white font-extrabold text-5xl">
            {now.toLocaleTimeString("en-US", timeOptions)}
          </Text>
            <CircularProgress
              percentage={50}
              size={70}
              strokeWidth={6}
              color="#ffffff"
            />
        </View>
      </View>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={(item) => <TodoCard/>}
        className="px-4 "
      />

      {/* Add Button */}
      <TouchableOpacity
        className="absolute bottom-28 right-4 h-14 w-14 items-center justify-center rounded-full bg-[#ff0000] shadow-xl elevation-5"
        onPress={() => {
          handleAdd();
        }}
      >
        <Image
          source={icons.plus}
          resizeMode="contain"
          tintColor={"#ececec"}
          className="size-7"
        />
      </TouchableOpacity>
    </View>
  );
}
