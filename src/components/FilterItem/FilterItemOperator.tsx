import { useState } from 'react';
import SearchableSelect from '../SearchableSelect';
import useFilterStore from '../../store/filterStore';
import { OPERATORS, OPERATORS_BY_FIELD } from '../../constants/filter';
import { Button } from '../ui/button';

const FilterItemOperator = ({ id }: { id: string }) => {
    const [open, setOpen] = useState(false);
    const operator = useFilterStore(state => state.filtersById[id].operator)
    const field = useFilterStore(state => state.filtersById[id].field)
    const value = useFilterStore(state => state.filtersById[id].value);
    const updateFilter = useFilterStore(state => state.updateFilter);

    let list;
    if (value && value.length > 1) {
        list = OPERATORS_BY_FIELD[field].multi.map(value => ({ label: OPERATORS[value].label, value }))
    } else {
        list = OPERATORS_BY_FIELD[field].single.map(value => ({ label: OPERATORS[value].label, value }))
    }
    return (
        <SearchableSelect
            open={open}
            setOpen={setOpen}
            value={[operator]}
            onChange={(value) => updateFilter(id, { operator: value[0] })}
            list={list}
            showCheckbox={false}
            trigger={
                <Button>
                    {OPERATORS[operator].label}
                </Button>
            }
        />
    );
}

export default FilterItemOperator;
