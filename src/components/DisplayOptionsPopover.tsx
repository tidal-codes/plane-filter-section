import React from 'react';
import PopoverBase from './ui/popover';

interface DisplayOptionsPopover {
    children: React.ReactNode;
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>

}
const DisplayOptionsPopover = ({ open, setOpen, children }: DisplayOptionsPopover) => {
    return (
        <PopoverBase open={open} setOpen={setOpen} trigger={children}>
            hi
        </PopoverBase>
    );
}

export default DisplayOptionsPopover;
