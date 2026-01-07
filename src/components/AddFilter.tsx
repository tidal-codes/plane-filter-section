import { useState } from 'react';
import SearchableSelect from './SearchableSelect';
import { Button } from './ui/button';
import { ListFilter } from 'lucide-react';
import { ADD_FILTER_MENU } from '../constants/filter';
import useFilterStore from '../store/filterStore';
import type { FilterField } from '../@types';

const AddFilter = () => {
    const [open, setOpen] = useState(false);
    const addFilter = useFilterStore(state => state.addFilter);

    return (
        <SearchableSelect<FilterField>
            open={open}
            setOpen={setOpen}
            value={[]}
            onChange={(value) => addFilter(value[0])}
            list={[...ADD_FILTER_MENU]}
            showCheckbox={false}
            multiple={false}
            trigger={
                <Button size="icon">
                    <ListFilter />
                </Button>
            }
        />
    );
}

export default AddFilter;
