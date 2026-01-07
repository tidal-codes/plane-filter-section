import AddFilter from "./AddFilter";
import DisplayOptionsButton from "./DisplayOptionsButton";


const BoardHeader = () => {
    return (
        <div className='w-full p-2 border-b border-gray-300'>
            <div className="flex items-center gap-2">
                <AddFilter />
                <DisplayOptionsButton />
            </div>
        </div>
    );
}

export default BoardHeader;
