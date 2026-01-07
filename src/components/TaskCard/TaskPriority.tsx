import type { TaskPriority as TaskPriorityType } from "../../@types";
import useDisplayStore from "../../store/displayStore";
import { PRIORITY_DETAILS } from "../../utils/priority";

const TaskPriority = ({ priority }: { priority: TaskPriorityType }) => {
    const showPriority = useDisplayStore(state => state.displayProperties.priority);
    if (!showPriority) return null;
    
    const { color, bgColor } = PRIORITY_DETAILS[priority];

    return (
        <span className={`px-2 py-0.5 text-xs ${color} ${bgColor}`}>
            {priority}
        </span>
    );
}

export default TaskPriority;
