import { Circle } from "lucide-react";
import useStore from "../../store";


const LabelItem = ({ labelId }: { labelId: string }) => {
    const label = useStore(state => state.labelsById[labelId]);

    return (
        <p className="flex border border-gray-300 items-center gap-1 px-2 py-0.5 text-xs">
            <Circle size="12" style={{ fill: label.color, stroke: "none" }} />
            <span>
                {label.name}
            </span>
        </p>
    );
}

export default LabelItem;
