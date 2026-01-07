import { Switch } from './switch';
import { Label } from './Label';

interface ToggleSwitchProps {
    id: string
    label: string
    checked: boolean
    onChecked: (value: boolean) => void
}

const ToggleSwitch = ({ id, label, checked, onChecked }: ToggleSwitchProps) => {
    return (
        <div className="flex items-center space-x-2">
            <Switch id={id} checked={checked} onCheckedChange={onChecked} />
            <Label htmlFor={id}>{label}</Label>
        </div>
    );
}

export default ToggleSwitch;
