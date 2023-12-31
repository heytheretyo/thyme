import "expo-router/entry";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="py-14 px-10">
      <Text className="text-4xl font-semibold mb-8">Your Habits</Text>
      <View className="bg-[#72CA2D] py-12 pr-12 pl-6 my-4 rounded-2xl">
        <Text className="text-4xl font-semibold text-white">Hourly</Text>
      </View>
    </View>
  );
}
