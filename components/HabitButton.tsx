import React from "react";
import clsx from "clsx";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function HabitButton({ color, href, children }) {
  return (
    <Link href={`${href}`} asChild>
      <Pressable>
        <View className={clsx(`${color} py-12 pr-12 pl-6 my-2 rounded-2xl`)}>
          <Text className="text-4xl text-white font-jakartasans-sb">
            {children}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}
