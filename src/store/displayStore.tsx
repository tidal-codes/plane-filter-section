import { create } from "zustand";
import type { DisplayPropertiesType } from "../@types";

interface DisplayStoreType {
    displayProperties: Record<DisplayPropertiesType, boolean>
    setDisplayProperty: (property: DisplayPropertiesType, value: boolean) => void
}


const useDisplayStore = create<DisplayStoreType>(set => ({
    displayProperties: {
        priority: true,
        labels: true,
        assignees: true
    },
    setDisplayProperty: (property, value) => {
        set(state => ({ displayProperties: { ...state.displayProperties, [property]: value } }))
    }
}))

export default useDisplayStore;