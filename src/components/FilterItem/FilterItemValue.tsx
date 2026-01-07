import useFilterStore from "../../store/filterStore";
import Assignees from "./valuePicker/Assignees";
import Labels from "./valuePicker/labels";
import Priorities from "./valuePicker/Priorities";

const FilterItemValue = ({ id }: { id: string }) => {
    const field = useFilterStore(state => state.filtersById[id].field);
    const value = useFilterStore(state => state.filtersById[id].value);
    switch (field) {
        case "labels":
            return <Labels id={id} value={value || []} />
        case "assignees":
            return <Assignees id={id} value={value || []} />
        case "priority":
            return <Priorities id={id} value={value || []} />
        default:
            throw new Error("incorrect field value")
    }
}

export default FilterItemValue;
