import useStore from "../../store";
import MetaSection from "./metaSection";

export default function TaskCard({ taskId }: { taskId: string }) {
    const task = useStore(state => state.tasksById[taskId])

    return (
        <div className="bg-white border border-gray-300 rounded-xs p-4 mb-3 max-w-sm">
            <h3 className="truncate font-semibold mb-1">{task.title}</h3>
            <p className="truncate text-sm">{task.description}</p>
            <MetaSection priority={task.priority} labels={task.labels} assignees={task.assignees} />
        </div>
    );
}
