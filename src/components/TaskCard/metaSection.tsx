import type { TaskPriority as TaskPriorityType } from '../../@types';
import TaskPriority from './TaskPriority';
import TaskLabels from './TaskLabels';
import TaskAssignees from './TaskAssignees';

interface MetaSectionProps {
    priority: TaskPriorityType;
    labels: string[];
    assignees: string[];
}



const MetaSection = ({ priority, labels, assignees }: MetaSectionProps) => {
    return (
        <div className='flex items-center gap-1.5 flex-wrap mt-2'>
            <TaskLabels labels={labels} />
            <TaskAssignees assignees={assignees} />
            <TaskPriority priority={priority} />
        </div>
    );
}

export default MetaSection;
