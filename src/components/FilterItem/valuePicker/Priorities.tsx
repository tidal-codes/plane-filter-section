import { useState } from 'react';
import SearchableSelect from '../../SearchableSelect';
import { PRIORITY_LIST, PRIORITY_META } from '../../../constants/priority'
import useFilterStore from '../../../store/filterStore';
import { Button } from '../../ui/button';
import type { TaskPriority } from '../../../@types';

interface PrioritiesProps {
    id: string
    value: string[]
}

const Priorities = ({ id, value }: PrioritiesProps) => {
    const [open, setOpen] = useState(false);
    const updateFilter = useFilterStore(state => state.updateFilter);

    function getLabelString() {
        if (value.length === 0) return "--";
        if (value.length === 1) return (
            <span className='flex items-center gap-1'>
                {PRIORITY_META[value[0] as TaskPriority].icon}
                {PRIORITY_META[value[0] as TaskPriority].label}
            </span>
        )
        return `${value.length} priorities`;
    }

    return (
        <SearchableSelect<TaskPriority>
            open={open}
            setOpen={setOpen}
            list={[...PRIORITY_LIST]}
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

export default Priorities;
