import { X } from "lucide-react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import FilterItemField from "./FilterItemField";
import FilterItemOperator from "./FilterItemOperator";
import FilterItemValue from "./FilterItemValue";
import useFilterStore from "../../store/filterStore";
const FilterItem = ({ filterId }: { filterId: string }) => {
    const removeFilter = useFilterStore(state => state.removeFilter);
    return (
        <ButtonGroup>
            <FilterItemField id={filterId} />
            <FilterItemOperator id={filterId} />
            <FilterItemValue id={filterId} />
            <Button size="icon" onClick={() => removeFilter(filterId)}>
                <X />
            </Button>
        </ButtonGroup>
    );
}

export default FilterItem;
