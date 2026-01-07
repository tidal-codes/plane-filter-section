import { ListFilterPlus } from 'lucide-react';
import useFilterStore from '../../store/filterStore';
import FilterItem from '../FilterItem';
import { Button } from '../ui/button';
import TooltipBase from '../ui/tooltip';

const Filterlist = () => {
    const filterIds = useFilterStore(state => state.filterIds);
    return (
        <div className='flex items-center gap-2 flex-wrap'>
            {filterIds.map(id => {
                return <FilterItem key={id} filterId={id} />
            })}
            <TooltipBase content="Add New Filter">
                <Button size="icon">
                    <ListFilterPlus />
                </Button>
            </TooltipBase>
        </div>
    );
}

export default Filterlist;
