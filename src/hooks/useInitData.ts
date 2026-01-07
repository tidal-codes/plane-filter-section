import useStore from "../store";
import useLabels from "./useLabels";
import useMembers from "./useMembers";
import useTasks from "./useTasks";

export default function useInitData() {
    const { data: tasks, isLoading: tasksLoading, error: tasksError } = useTasks();
    const { data: labels, isLoading: labelsLoading, error: labelsError } = useLabels();
    const { data: members, isLoading: membersLoading, error: membersError } = useMembers();
    const setTasks = useStore(state => state.setTasks);
    const setLabels = useStore(state => state.setLabels);
    const setMembers = useStore(state => state.setMembers);

    const isLoading = tasksLoading || labelsLoading || membersLoading;
    const isError = tasksError || labelsError || membersError;

    if (isError) {
        throw Error("Failed to load initial data")
    }

    if (!isLoading && tasks && labels && members) {
        setTasks(tasks!);
        setLabels(labels!);
        setMembers(members!);
    }

    return { isLoading }
}