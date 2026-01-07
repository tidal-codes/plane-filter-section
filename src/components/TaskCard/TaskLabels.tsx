import LabelItem from './LabelItem';

const TaskLabels = ({ labels }: { labels: string[] }) => {
    return (
        <div className='flex items-center gap-2 flex-wrap'>
            {labels.map(id => {
                return <LabelItem key={id} labelId={id} />
            })}
        </div>
    );
}

export default TaskLabels;
