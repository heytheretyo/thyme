import React from "react";
import clsx from "clsx";
import { View } from "react-native";

export default function ProgressBar({ style, percentage }) {
  return (
    <View className="w-full h-6 mt-2 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
      <View
        className={clsx("h-6  rounded-full", style)}
        style={{ width: percentage }}
      ></View>
    </View>
  );
}
