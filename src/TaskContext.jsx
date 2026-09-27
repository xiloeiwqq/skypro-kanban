import { useCallback, useState } from "react";
import * as api from "./api.js";
import { TaskContext } from "./TaskContextValue.js";
import { useAuth } from "./useAuth.js";

function normalizeTask(task) {
  return { ...task, id: task.id || task._id };
}

function normalizeTasks(data) {
  return (data.tasks || []).map(normalizeTask);
}

export function TaskProvider({ children }) {
  const { token } = useAuth();
  const [taskData, setTaskData] = useState({ token: null, tasks: [] });
  const tasks = taskData.token === token ? taskData.tasks : [];
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadTasks = useCallback(async () => {
    if (!token) return;

    setIsLoading(true);
    setError("");
    try {
      const data = await api.getTasks(token);
      setTaskData({ token, tasks: normalizeTasks(data) });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  const getTaskById = useCallback(async (taskId) => {
    const data = await api.getTask(token, taskId);
    return normalizeTask(data.task);
  }, [token]);

  const createTask = useCallback(async (task) => {
    const data = await api.createTask(token, task);
    setTaskData({ token, tasks: normalizeTasks(data) });
  }, [token]);

  const updateTask = useCallback(async (taskId, task) => {
    const data = await api.updateTask(token, taskId, task);
    setTaskData({ token, tasks: normalizeTasks(data) });
  }, [token]);

  const deleteTask = useCallback(async (taskId) => {
    const data = await api.deleteTask(token, taskId);
    setTaskData({ token, tasks: normalizeTasks(data) });
  }, [token]);

  return (
    <TaskContext.Provider
      value={{ tasks, isLoading, error, loadTasks, getTaskById, createTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}