import { Text, View } from "react-native";
import HabitContainer from "../components/HabitContainer";
import HabitButton from "../components/HabitButton";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

export default function Index() {
  return (
    <View className="flex-1 px-6 py-20 bg-limey font-jakartasans-b">
      <Text className="mb-5 text-4xl font-semibold text-white font-jakartasans-b">
        Hourly Habits
      </Text>
      <ProgressBar />
      <Text className="mb-6 text-xl text-white font-jakartasans-sb">
        You have 3 habits and you are 56% consistent.
      </Text>
      <HabitContainer color={"bg-orangey"} href={"hourly-id-231312"}>
        Drink Water
      </HabitContainer>
      <HabitContainer color={"bg-orangey"} href={"hourly-id-231312"}>
        Take a Break
      </HabitContainer>
      <Button color={"bg-purpey"} href={"/"}>
        Back home
      </Button>
    </View>
  );
}
