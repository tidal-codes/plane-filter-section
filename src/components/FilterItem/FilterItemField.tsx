import { useState } from "react";
import type { FilterField } from "../../@types";
import SearchableSelect from "../SearchableSelect";
import useFilterStore from "../../store/filterStore";
import { ADD_FILTER_MENU } from "../../constants/filter";
import { Button } from "../ui/button";


const FilterItemField = ({ id }: { id: string }) => {
    const [open, setOpen] = useState(false);
    const field = useFilterStore(state => state.filtersById[id].field);
    const updateFilter = useFilterStore(state => state.updateFilter);
    const list = [...ADD_FILTER_MENU];
    return (
        <SearchableSelect<FilterField>
            open={open}
            setOpen={setOpen}
            value={[]}
            onChange={(value) => updateFilter(id, { field: value[0] })}
            list={list}
            showCheckbox={false}
            multiple={false}
            trigger={
                <Button>
                    {field}
                </Button>
            }
        />
    );
}

export default FilterItemField;
