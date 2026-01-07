import { useState } from 'react';
import DisplayOptionsPopover from './DisplayOptionsPopover';
import { Button } from './ui/button';
import { Settings2 } from 'lucide-react';

const DisplayOptionsButton = () => {
    const [open, setOpen] = useState(false);
    return (
        <DisplayOptionsPopover open={open} setOpen={setOpen}>
            <Button size="icon">
                <Settings2 />
            </Button>
        </DisplayOptionsPopover>
    );
}

export default DisplayOptionsButton;
