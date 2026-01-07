import { useState } from 'react';
import SearchableSelect from './SearchableSelect';
import { Button } from './ui/button';
import { ListFilter } from 'lucide-react';
import { ADD_FILTER_MENU } from '../constants/filter';
import useFilterStore from '../store/filterStore';
import type { FilterField } from '../@types';
import TooltipBase from './ui/tooltip';

const AddFilter = () => {
    const [open, setOpen] = useState(false);
    const addFilter = useFilterStore(state => state.addFilter);
    const filters = useFilterStore(state => state.filters);
    const isFilterSectionOpen = useFilterStore(state => state.sectionOpen);
    const setFilterSectionOpen = useFilterStore(state => state.setSectionOpen);

    function getTooltipContent() {
        if (filters.length && !isFilterSectionOpen) {
            return `${filters.length} Active Filters`;
        }
        if (filters.length && isFilterSectionOpen) {
            return "Hide Filter section";
        }
        return "Add Filter";
    }
    return (
        <TooltipBase content={getTooltipContent()}>
            <SearchableSelect<FilterField>
                open={open}
                setOpen={setOpen}
                value={[]}
                onChange={(value) => addFilter(value[0])}
                list={[...ADD_FILTER_MENU]}
                showCheckbox={false}
                multiple={false}
                trigger={
                    <Button
                        size="icon"
                        className={`${filters.length ? "outline-2 outline-solid outline-blue-500 outline-offset-2" : ""}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            if (filters.length || isFilterSectionOpen) {
                                setFilterSectionOpen(!isFilterSectionOpen);
                                return;
                            }
                            setOpen(prev => !prev);
                        }}
                    >
                        <ListFilter />
                    </Button>
                }
            />
        </TooltipBase>
    );
}

export default AddFilter;
