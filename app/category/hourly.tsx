import { Text, View, ScrollView } from "react-native";
import HabitContainer from "../../components/HabitContainer";
import Button from "../../components/Button";
import ProgressBar from "../../components/ProgressBar";
import HabitButton from "../../components/HabitButton";
import { useCallback, useRef } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import CreateHabitSlider from "../../components/CreateHabitSlider";

export default function Index() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="h-full bg-limey"
      >
        <View className="flex-1 px-6 pt-20 pb-7 bg-limey font-jakartasans-b">
          <Text className="mb-5 text-4xl font-semibold text-white font-jakartasans-b">
            Hourly Habits
          </Text>
          <ProgressBar style={"bg-purpey "} percentage={"56%"} />
          <Text className="mb-6 text-xl text-white font-jakartasans-sb">
            You have 3 habits and you are 56% consistent.
          </Text>
          <HabitContainer color={"bg-orangey"} href={"hourly-id-231312"}>
            Drink Water
          </HabitContainer>
          <HabitContainer color={"bg-orangey"} href={"hourly-id-231312"}>
            Take a Break
          </HabitContainer>
          <HabitContainer color={"bg-orangey"} href={"hourly-id-231312"}>
            Take a Break
          </HabitContainer>
          <HabitContainer color={"bg-orangey"} href={"hourly-id-231312"}>
            Take a Break
          </HabitContainer>
          <HabitButton
            callOnPress={handlePresentModalPress}
            style={"flex-end bg-orangey"}
          >
            Add a habit
          </HabitButton>
          <CreateHabitSlider bottomSheetModalRef={bottomSheetModalRef} />

          <Button style={"flex-end bg-purpey"} href={"/"}>
            Back home
          </Button>
        </View>
      </ScrollView>
    </BottomSheetModalProvider>
  );
}
