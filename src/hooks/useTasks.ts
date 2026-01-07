import { useQuery } from '@tanstack/react-query';
import tasks from '../data/tasks.json';
import type { Task } from '../@types';

export default function useTasks() {
    const { data, isLoading, error } = useQuery<Task[]>({
        queryKey: ["tasks"],
        queryFn: async () => tasks as Task[]
    })

    return { data, isLoading, error }
}