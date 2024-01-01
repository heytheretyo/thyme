import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "./mmkv";
import uuid from "react-native-uuid";
import { v4 as uuidv4 } from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Habit {
  title: string;
  id?: string;
  desc: string;
  type: HabitType;
}

type HabitType = "hourly" | "weekly" | "monthly" | "yearly";

export interface HabitStoreState {
  habits: Array<Habit>;
  addHabit: (habit: Habit) => void;
  deleteHabit: (habitId: string) => void;
}

const useHabitStore = create<HabitStoreState>()(
  persist(
    (set, get) => ({
      habits: [],
      addHabit: (habit: Habit) => {
        set((state) => ({
          habits: [...state.habits, { ...habit, id: uuid.v4() as string }],
        }));
      },
      deleteHabit: (habitId: string) => {
        set((state) => ({
          habits: state.habits.filter((h) => h.id !== habitId),
        }));
      },
    }),
    {
      name: "habit-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useHabitStore;
