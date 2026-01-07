import { useState } from 'react';
import SearchableSelect from '../../SearchableSelect';
import { PRIORITY_LIST } from '../../../constants/priority'
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
                    {value ? value.join(' , ') : "--"}
                </Button>
            }
        />
    );
}

export default Priorities;
