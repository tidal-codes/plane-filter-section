import { create } from "zustand";
import type { FilterField, FilterItem } from "../@types";



interface FilterStoreType {
    filterIds: string[],
    filtersById: Record<string, FilterItem>,
    filters: FilterItem[]
    sectionOpen: boolean
    setSectionOpen: (value: boolean) => void
    addFilter: (field: FilterField) => void;
    updateFilter: (id: string, patch: Partial<FilterItem>) => void;
}
const makeId = () =>
    `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;

const useFilterStore = create<FilterStoreType>(set => ({
    filterIds: [],
    filtersById: {},
    filters: [],
    sectionOpen: false,
    setSectionOpen: (value) => set({ sectionOpen: value }),
    addFilter(field) {
        const id = makeId();

        const newFilter: FilterItem = {
            id,
            field,
            operator: "is",
            value: null,
        };

        set((state) => ({
            filterIds: [...state.filterIds, id],
            filtersById: { ...state.filtersById, [id]: newFilter },
            filters: [...state.filters, newFilter],
            sectionOpen: true,
        }));
    },
    updateFilter(id, patch) {
        set((state) => {
            const current = state.filtersById[id];
            if (!current) return state;

            return {
                ...state,
                filtersById: {
                    ...state.filtersById,
                    [id]: {
                        ...current,
                        ...patch,
                    },
                },
                filters: state.filters.map(filter => filter.id === id ? {
                    ...filter,
                    ...patch,
                } : filter)
            };
        });
    },
}))

export default useFilterStore;