import { useCallback, useState } from "react";
import * as api from "./api.js";
import { TasksContext } from "./TasksContextValue.js";

function normalizeTask(task) {
  return { ...task, id: task.id || task._id };
}

function normalizeTasks(data) {
  return (data.tasks || []).map(normalizeTask);
}

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadTasks = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setIsLoading(true);
    setError("");
    try {
      const data = await api.getTasks(token);
      setTasks(normalizeTasks(data));
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getTaskById = useCallback(async (taskId) => {
    const data = await api.getTask(localStorage.getItem("token"), taskId);
    return normalizeTask(data.task);
  }, []);

  const createTaskOnServer = useCallback(async (task) => {
    const data = await api.createTask(localStorage.getItem("token"), task);
    setTasks(normalizeTasks(data));
  }, []);

  const updateTaskOnServer = useCallback(async (taskId, task) => {
    const data = await api.updateTask(localStorage.getItem("token"), taskId, task);
    setTasks(normalizeTasks(data));
  }, []);

  const deleteTaskOnServer = useCallback(async (taskId) => {
    const data = await api.deleteTask(localStorage.getItem("token"), taskId);
    setTasks(normalizeTasks(data));
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        isLoading,
        error,
        loadTasks,
        getTaskById,
        createTask: createTaskOnServer,
        updateTask: updateTaskOnServer,
        deleteTask: deleteTaskOnServer,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}