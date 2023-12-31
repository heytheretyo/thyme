import React from "react";
import clsx from "clsx";
import { View } from "react-native";

export default function ProgressBar({ color, percentage, children }) {
  return (
    <View className="items-start justify-center w-full h-6 my-4 bg-white rounded-3xl">
      <View className="w-4/6 rounded-lg bg-bluey"></View>
    </View>
  );
}
