import { useParams } from "react-router-dom";
import PopBrowse from "../components/PopBrowse/PopBrowse.jsx";
import BoardPage from "./BoardPage.jsx";

function TaskPage({ editable = false }) {
  const { taskId } = useParams();

  return (
    <BoardPage>
      <PopBrowse key={taskId} taskId={taskId} editable={editable} />
    </BoardPage>
  );
}

export default TaskPage;
