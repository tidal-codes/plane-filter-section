import useFilterStore from "../../store/filterStore";
import Filterlist from "./Filterlist";


const FilterSection = () => {
    const sectionOpen = useFilterStore(state => state.sectionOpen);

    if (!sectionOpen) return null;
    return (
        <section className="w-full p-2 border-b border-gray-300 bg-white">
            <div className='w-full bg-gray-300 py-3 px-2'>
                <Filterlist />
            </div>
        </section>
    );
}

export default FilterSection;
