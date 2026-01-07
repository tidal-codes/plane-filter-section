import type { DisplayPropertiesType } from "../@types"

type cs = { key: DisplayPropertiesType, label: string }[]

export const DISPLAY_PROPERTIES: cs = [
    { key: "assignees", label: "assignees" },
    { key: "labels", label: "labels" },
    { key: "priority", label: "priority" },
] as const;