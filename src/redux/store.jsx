import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/taskSlice";
import userSlice from "./features/tasks/userSlice";
export const store = configureStore({
  reducer: {
    tasksSlice: taskSlice,
    userSlice: userSlice,
  },
});
