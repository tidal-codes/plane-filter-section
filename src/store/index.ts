import { create } from 'zustand';
import type { Label, Member, Task } from '../@types';

interface StoreType {
    taskIds: string[];
    tasksById: Record<string, Task>;
    labelsById: Record<string, Label>;
    membersById: Record<string, Member>;
    setTasks: (tasks: Task[]) => void;
    setLabels: (labels: Label[]) => void;
    setMembers: (members: Member[]) => void;
}


const useStore = create<StoreType>(set => ({
    taskIds: [],
    tasksById: {},
    labelsById: {},
    membersById: {},
    setTasks: (tasks) => {
        set({ taskIds: tasks.map(task => task.id) });
        const tasksById = getByIdObject(tasks);
        set({ tasksById })
    },
    setLabels: (labels) => {
        const labelsById = getByIdObject(labels);
        set({ labelsById })
    },
    setMembers: (members) => {
        const membersById = getByIdObject(members);
        set({ membersById })
    }
}))

export default useStore;


function getByIdObject<T extends { id: string }>(array: T[]): Record<string, T> {
    const map = new Map();
    for (const item of array) {
        map.set(item.id, item);
    }
    return Object.fromEntries(map);
}