import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import LogoutPage from "./LogoutPage.jsx";
import NewTaskPage from "./NewTaskPage.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import SignInPage from "./SignInPage.jsx";
import SignUpPage from "./SignUpPage.jsx";
import TaskPage from "./TaskPage.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<SignInPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/NotFound" element={<NotFoundPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks/new" element={<NewTaskPage />} />
        <Route path="/tasks/:taskId" element={<TaskPage />} />
        <Route path="/tasks/:taskId/edit" element={<TaskPage editable />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
