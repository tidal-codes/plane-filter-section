import useDisplayStore from '../../store/displayStore';
import LabelItem from './LabelItem';

const TaskLabels = ({ labels }: { labels: string[] }) => {
    const showLabels = useDisplayStore(state => state.displayProperties.labels);
    if (!showLabels) return null;
    return (
        <div className='flex items-center gap-2 flex-wrap'>
            {labels.map(id => {
                return <LabelItem key={id} labelId={id} />
            })}
        </div>
    );
}

export default TaskLabels;
