import useFilterStore from '../../store/filterStore';
import FilterItem from '../FilterItem';

const Filterlist = () => {
    const filterIds = useFilterStore(state => state.filterIds);
    return (
        <div className='flex items-center gap-2'>
            {filterIds.map(id => {
                return <FilterItem key={id} filterId={id} />
            })}
        </div>
    );
}

export default Filterlist;
