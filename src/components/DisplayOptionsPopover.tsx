import React from 'react';
import PopoverBase from './ui/popover';
import ToggleSwitch from './ui/toggle-switch';
import { DISPLAY_PROPERTIES } from '../constants/displayProperties';
import useDisplayStore from '../store/displayStore';


interface DisplayOptionsPopover {
    children: React.ReactNode;
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>

}
const DisplayOptionsPopover = ({ open, setOpen, children }: DisplayOptionsPopover) => {
    const displayProperties = useDisplayStore(state => state.displayProperties);
    const setDisplayProperty = useDisplayStore(state => state.setDisplayProperty);
    return (
        <PopoverBase open={open} setOpen={setOpen} trigger={children}>
            <div className='flex flex-col gap-2 min-w-40'>
                {DISPLAY_PROPERTIES.map(property => {
                    return <ToggleSwitch
                        key={property.key}
                        id={property.key}
                        checked={displayProperties[property.key]}
                        onChecked={(value) => setDisplayProperty(property.key, value)}
                        label={property.label}
                    />
                })}
            </div>
        </PopoverBase>
    );
}

export default DisplayOptionsPopover;
