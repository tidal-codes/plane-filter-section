import { SignalHigh, Tag, Users } from "lucide-react";
import type { FilterField, FilterOperator } from "../@types";

export const ADD_FILTER_MENU = [
    {
        value: "priority",
        label: "priority",
        icon: <SignalHigh />
    },
    {
        value: "labels",
        label: "labels",
        icon: <Tag />
    },
    {
        value: "assignees",
        label: "assignees",
        icon: <Users />
    },
] as const

export const OPERATORS_BY_FIELD: Record<
    FilterField,
    Record<"single" | "multi", FilterOperator[]>
> = {
    priority: {
        single: ["is", "is_not"],
        multi: ["is_any_of", "is_none_of"],
    },
    labels: {
        single: ["is", "is_not"],
        multi: ["is_any_of", "is_none_of"],
    },
    assignees: {
        single: ["is", "is_not"],
        multi: ["is_any_of", "is_none_of"],
    }
};

export const OPERATORS = {
    is: { value: "is", label: "is" },
    is_not: { value: "is_not", label: "is not" },
    is_any_of: { value: "is_any_of", label: "is any of" },
    is_none_of: { value: "is_none_of", label: "is none of" },
    before: { value: "before", label: "before" },
    after: { value: "after", label: "after" },
    between: { value: "between", label: "between" },

} as const;