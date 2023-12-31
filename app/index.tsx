import "expo-router/entry";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import HomeContainer from "../components/HomeContainer";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [isLoaded] = useFonts({
    "JakartaSans-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "JakartaSans-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "JakartaSans-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <View className="flex-1 px-6 py-20">
        <Text className="mb-8 text-4xl font-semibold font-jakartasans-b">
          Your Habits
        </Text>
        <HomeContainer href="/category/hourly" color="bg-limey">
          Hourly
        </HomeContainer>
        <HomeContainer href="/daily" color="bg-orangey">
          Daily
        </HomeContainer>
        <HomeContainer href="/monthly" color="bg-purpey">
          Monthly
        </HomeContainer>
        <HomeContainer href="/year" color="bg-pinkey">
          Year
        </HomeContainer>
        <StatusBar />
      </View>
    </>
  );
}
