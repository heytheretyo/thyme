import { Text, View } from "react-native";
import { useLocalSearchParams, useGlobalSearchParams, Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const friends = ["charlie", "james"];

export default function Route() {
  const glob = useGlobalSearchParams();
  // const local = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Text>User: {glob.id}</Text>
    </SafeAreaView>
  );
}
