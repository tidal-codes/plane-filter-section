import { ButtonGroup } from "../ui/button-group";
import FilterItemField from "./FilterItemField";
import FilterItemOperator from "./FilterItemOperator";
import FilterItemValue from "./FilterItemValue";
const FilterItem = ({ filterId }: { filterId: string }) => {
    return (
        <ButtonGroup>
            <FilterItemField id={filterId} />
            <FilterItemOperator id={filterId} />
            <FilterItemValue id={filterId} />
        </ButtonGroup>
    );
}

export default FilterItem;
