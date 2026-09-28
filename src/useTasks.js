import { useContext } from "react";
import { TaskContext } from "./TaskContextValue.js";

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("useTasks должен использоваться внутри TaskProvider");
  return context;
}
