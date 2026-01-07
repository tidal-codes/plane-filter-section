import type { TaskPriority } from "../@types"

type PriorityDetails = Record<TaskPriority, { color: string; bgColor: string }>

export const PRIORITY_DETAILS: PriorityDetails = {
    low: { color: "text-blue-700", bgColor: "bg-blue-200" },
    medium: { color: "text-yellow-700", bgColor: "bg-yellow-200" },
    high: { color: "text-red-700", bgColor: "bg-red-200" },
};