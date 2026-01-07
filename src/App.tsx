import Board from "./components/Board";
import useInitData from "./hooks/useInitData";

const App = () => {
    const { isLoading } = useInitData();
    return (
        <div className="h-screen px-20 py-15 flex items-center justify-center overflow-hidden">
            {
                isLoading ? (
                    <div className="w-full h-full flex items-center justify-center">
                        <h2 className="text-lg">loading data ...</h2>
                    </div>
                ) : (
                    <Board />
                )
            }
        </div>
    );
}

export default App;
