import useFilterTasks from "../hooks/useFilterTasks";
import useStore from "../store";
import TaskCard from "./TaskCard";

const TasksList = () => {
    const taskIds = useStore(state => state.taskIds);
    const filteredTasks = useFilterTasks(taskIds);
    return (
        <div className="p-4">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredTasks.map(id => (
                    <TaskCard key={id} taskId={id} />
                ))}
            </div>
        </div>
    );
}

export default TasksList;
