import { SignalHigh, SignalLow, SignalMedium } from "lucide-react"

export const PRIORITY_META = {

    low: {
        label: 'low',
        color: 'text-blue-500',
        bg_color: 'bg-blue-100',
        icon: <SignalLow />
    },
    medium: {
        label: 'medium',
        color: 'text-yellow-500',
        bg_color: 'bg-yellow-100',
        icon: <SignalMedium />
    },
    high: {
        label: 'high',
        color: 'text-orange-500',
        bg_color: 'bg-orange-100',
        icon: <SignalHigh />
    }
} as const

export const PRIORITY_LIST = [
    {
        value: "low",
        label: "Low",
        icon: "🟢"
    },
    {
        value: "medium",
        label: "Medium",
        icon: "🟡"
    },
    {
        value: "high",
        label: "High",
        icon: "🔴"
    }
] as const