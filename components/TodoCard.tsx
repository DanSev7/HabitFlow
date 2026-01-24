import icons from "@/constants/icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TodoCard = () => {
  return (
    <View className="relative bg-gray-100 rounded-2xl shadow-lg elevation-5 mb-4 p-8">
      <Text className="text-2xl font-bold">TodoCard</Text>
      <TouchableOpacity 
        className="absolute items-center justify-center top-10 right-8"
        onFocus={() => console.log("focus")}
        onBlur={() => console.log("blur")}
        >
        <Image
          source={icons.circle}
          resizeMode="contain"
          tintColor={"#6e6d6d92"}
          className="size-8"
        />
      </TouchableOpacity>
    </View>
  );
};

export default TodoCard;
