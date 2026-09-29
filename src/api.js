const API_URL = "https://wedev-api.sky.pro/api";

async function request(path, { token, ...options } = {}) {
  const headers = new Headers(options.headers);
  if (token) headers.set("Authorization", `Bearer ${token}`);

  let response;
  try {
    response = await fetch(`${API_URL}${path}`, { ...options, headers });
  } catch {
    throw new Error(
      "Не удалось связаться с сервером. Проверьте подключение и попробуйте еще раз.",
    );
  }
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message || data.error || `Ошибка запроса: ${response.status}`,
    );
  }

  return data;
}

export function signIn(login, password) {
  return request("/user/login", {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });
}

export function signUp(login, name, password) {
  return request("/user", {
    method: "POST",
    body: JSON.stringify({ login, name, password }),
  });
}

export function getTasks(token) {
  return request("/kanban", { token });
}

export function getTask(token, taskId) {
  return request(`/kanban/${taskId}`, { token });
}

export function createTask(token, task) {
  return request("/kanban", {
    token,
    method: "POST",
    body: JSON.stringify(task),
  });
}

export function updateTask(token, taskId, task) {
  return request(`/kanban/${taskId}`, {
    token,
    method: "PUT",
    body: JSON.stringify(task),
  });
}

export function deleteTask(token, taskId) {
  return request(`/kanban/${taskId}`, { token, method: "DELETE" });
}
