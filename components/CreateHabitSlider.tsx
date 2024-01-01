import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import Button from "./Button";
import HabitButton from "./HabitButton";

export default function CreateHabitSlider({ bottomSheetModalRef }) {
  const snapPoints = useMemo(() => ["25%", "70%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      handleStyle={{
        backgroundColor: "#5922F6",
        borderTopRightRadius: 10000,
        borderTopLeftRadius: 10000,
      }}
      backgroundStyle={{
        borderRadius: 10000,
        backgroundColor: "#5922F6",
      }}
      containerStyle={{}}
      handleIndicatorStyle={{
        backgroundColor: "white",
        width: 120,
        height: 8,
      }}
    >
      <View className="flex-1 p-6 bg-purpey">
        <Text className="mt-2 mb-5 text-3xl text-white font-jakartasans-b ">
          Create a Habit
        </Text>
        <Text className="mb-4 text-2xl text-white font-jakartasans-sb">
          What will be your habit?
        </Text>
        <TextInput
          className={`w-full bg-white border border-gray-200 py-5 px-4 rounded-xl font-jakartasans-sb my-3`}
        />
        <Text className="mb-5 text-2xl text-white font-jakartasans-sb">
          Extra Notes
        </Text>
        <TextInput
          className={`w-full bg-white border border-gray-200 py-5 px-4 rounded-xl font-jakartasans-sb  mb-5`}
        />
        <HabitButton style={"bg-black py-4 "} callOnPress={undefined}>
          Add Habit
        </HabitButton>
      </View>
    </BottomSheetModal>
  );
}
