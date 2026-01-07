import AvatarBase from "../ui/avatar";
import AssignedMemberAvatar from "./AssignedMemberAvatar";

interface TaskAssigneesProps {
    assignees: string[]
}
const TaskAssignees = ({ assignees }: TaskAssigneesProps) => {
    return (
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            {assignees.slice(0, 3).map(id => {
                return <AssignedMemberAvatar key={id} memberId={id} />
            })}
            {assignees.length > 3 && (
                <AvatarBase alt="" src={undefined} fallback={`+${assignees.length}`} />
            )}
        </div>
    );
}

export default TaskAssignees;
