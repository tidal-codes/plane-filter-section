import { useState } from 'react';
import useLabels from '../../../hooks/useLabels';
import { Circle } from 'lucide-react';
import useFilterStore from '../../../store/filterStore';
import { Button } from '../../ui/button';
import SearchableSelect from '../../SearchableSelect';

interface LabelsProps {
    id: string
    value: string[]
}

const Labels = ({ id, value }: LabelsProps) => {
    const [open, setOpen] = useState(false);
    const { data: labels } = useLabels();
    const labelsList = labels!.map(label => ({
        value: label.id,
        label: label.name,
        icon: <Circle style={{ color: label.color }} />
    }));
    const updateFilter = useFilterStore(state => state.updateFilter);

    function getLabelString() {
        if (value.length === 0) return "--";
        if (value.length === 1) {
            const label = labels!.find(label => label.id === value[0]);
            return (
                <span className='flex items-center gap-1'>
                    <Circle style={{ color: label!.color }} />
                    {label!.name}
                </span>
            )
        }
        return (
            <span className="flex items-center gap-2">
                <div className="flex -space-x-2">
                    {value.slice(0, 4).map(labelId => {
                        const label = labels!.find(l => l.id === labelId);
                        if (!label) return null;
                        return <Circle
                            key={label.id}
                            style={{ color: label.color, fill: label.color }}
                        />
                    })}
                </div>
                {`${value.length} members`}
            </span>
        )
    }

    return (
        <SearchableSelect<string>
            open={open}
            setOpen={setOpen}
            list={labelsList}
            value={value}
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

export default Labels;
