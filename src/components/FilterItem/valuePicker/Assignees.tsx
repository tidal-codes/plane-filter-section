import { useState } from "react";
import SearchableSelect from "../../SearchableSelect";
import useMembers from "../../../hooks/useMembers";
import AvatarBase from "../../ui/avatar";
import useFilterStore from "../../../store/filterStore";
import { Button } from "../../ui/button";

interface LabelsProps {
    id: string
    value: string[]
}

const Assignees = ({ id, value }: LabelsProps) => {
    const [open, setOpen] = useState(false);
    const { data: members } = useMembers();
    const updateFilter = useFilterStore(state => state.updateFilter);
    function getLabelString() {
        if (value.length === 0) return "--";
        if (value.length === 1) {
            const member = members!.find(member => member.id === value[0]);
            return (
                <span className='flex items-center gap-1'>
                    <AvatarBase src={member!.avatar} alt={member!.name} fallback={member!.name} />
                    {member!.name}
                </span>
            )
        }
        return (
            <span className="flex items-center gap-2">
                <div className="flex -space-x-2">
                    {value.map(assignedMember => {
                        const member = members!.find(m => m.id === assignedMember);
                        if (!member) return null;
                        return <AvatarBase src={member.avatar} alt={member.name} fallback={member.name} />
                    })}
                </div>
                {`${value.length} members`}
            </span>
        );
    }

    const membersList = members!.map(member => ({
        value: member.id,
        label: member.name,
        icon: <AvatarBase src={member.avatar} alt={member.name} fallback={member.name} />
    }))

    return (
        <SearchableSelect<string>
            open={open}
            setOpen={setOpen}
            list={membersList}
            value={value as TaskPriority[]}
            onChange={(value) => updateFilter(id, { value: value })}
            multiple={true}
            trigger={
                <Button>
                    {getLabelString()}
                </Button>
            }
        />
    );
}

export default Assignees;
