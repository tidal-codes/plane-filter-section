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
        multi: ["is_any_of", "is_not"],
    },
    labels: {
        single: ["is", "is_not", "include", "do_not_include"],
        multi: ["include_all_of", "include_any_of", "exclude_if_any_of", "exclude_if_all"],
    },
    assignees: {
        single: ["is", "is_not"],
        multi: ["is_any_of", "is_none_of"],
    }
};

export const OPERATORS = {
    is: { value: "is", label: "is" },
    is_not: { value: "is_not", label: "is not" },
    include: { value: "include", label: "include" },
    do_not_include: { value: "do_not_include", label: "do not include" },
    include_all_of: { value: "include_all_of", label: "include all of" },
    include_any_of: { value: "include_any_of", label: "include any of" },
    exclude_if_any_of: { value: "exclude_if_any_of", label: "exclude if any of" },
    exclude_if_all: { value: "exclude_if_all", label: "exclude if all" },
    is_any_of: { value: "is_any_of", label: "is any of" },
    is_none_of: { value: "is_none_of", label: "is none of" },
    before: { value: "before", label: "before" },
    after: { value: "after", label: "after" },
    between: { value: "between", label: "between" },

} as const;