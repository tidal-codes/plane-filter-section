import type { FilterItem, FilterOperator, Task } from "../@types";
import useStore from "../store";
import useFilterStore from "../store/filterStore"

export default function useFilterTasks(taskIds: string[]) {
    const filters = useFilterStore(state => state.filters);
    const tasksById = useStore(state => state.tasksById);
    if (filters.length === 0) return taskIds;

    const predicates = filters.map(filter => buildFilterPredicate(filter));

    return taskIds.filter(id => {
        const task = tasksById[id];
        return predicates.every(test => test(task))
    })
}

const filterFunctions: Record<FilterOperator, (fieldValue: string[], filterValue: string[]) => boolean> = {
    is: (fieldValue: string[], filterValue: string[]) => {
        return filterValue.every(val => fieldValue.includes(val));
    },
    is_not: (fieldValue: string[], filterValue: string[]) => {
        return fieldValue.every(val => !filterValue.includes(val));
    },
    include: (fieldValue, filterValue) => {
        return filterValue.some(val => fieldValue.includes(val));
    },
    do_not_include: (fieldValue, filterValue) => {
        return filterValue.every(val => !fieldValue.includes(val));
    },
    include_all_of: (fieldValue: string[], filterValue: string[]) => {
        return filterValue.every(val => fieldValue.includes(val));
    },
    include_any_of: (fieldValue: string[], filterValue: string[]) => {
        return filterValue.some(val => fieldValue.includes(val));
    },
    exclude_if_any_of: (fieldValue: string[], filterValue: string[]) => {
        return filterValue.every(val => !fieldValue.includes(val));
    },
    exclude_if_all: (fieldValue: string[], filterValue: string[]) => {
        return fieldValue.every(val => !filterValue.includes(val));
    },
    is_any_of: (fieldValue: string[], filterValue: string[]) => {
        return fieldValue.some(val => filterValue.includes(val));
    },
    is_none_of: (fieldValue: string[], filterValue: string[]) => {
        return true
    },
    before: (fieldValue: string[], filterValue: string[]) => {
        return true
    },
    after: (fieldValue: string[], filterValue: string[]) => {
        return true
    },
    between: (fieldValue: string[], filterValue: string[]) => {
        return true
    }
}

function buildFilterPredicate(filter: FilterItem) {
    const fn = filterFunctions[filter.operator];
    return function (task: Task) {
        const field = task[filter.field];
        const fieldValue = Array.isArray(field) ? field : [field] as string[];
        return fn(fieldValue, filter.value || [])
    }
}