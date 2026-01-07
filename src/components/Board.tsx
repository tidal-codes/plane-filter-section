import BoardHeader from "./BoardHeader";
import FilterSection from "./FilterSection";
import TasksList from "./TasksList";


const Board = () => {

    return (
        <div className="w-full h-full rounded-sm bg-[#E6E6E6] border border-gray-300 overflow-y-auto">
            <BoardHeader />
            <FilterSection />
            <TasksList />
        </div>
    );
}

export default Board;
