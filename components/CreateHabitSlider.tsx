import React from "react";
import clsx from "clsx";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function HabitButton({ style, href, children }) {
  return (
    <Link href={`${href}`} asChild>
      <Pressable>
        <View
          className={clsx(
            `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-jakartasans-sb rounded-xl text-sm px-5 py-6 my-5 mb-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`,
            style
          )}
        >
          <Text className="text-lg text-center text-white font-jakartasans-b">
            {children}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}
