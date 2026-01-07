import type React from 'react';
import { Command, CommandList, CommandItem } from './ui/command';
import { Checkbox } from './ui/checkbox';
import type { SelectItem as SelectItemType } from '../@types';
import PopoverBase from './ui/popover';

interface SearchableSelectProps<T extends string> {
    list: SelectItemType<T>[];
    value: T[];
    onChange: (val: T[]) => void;
    trigger: React.ReactNode;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    showCheckbox?: boolean;
    multiple?: boolean;
}

const SearchableSelect = <T extends string>({
    list,
    value,
    onChange,
    trigger,
    open,
    setOpen,
    showCheckbox = true,
    multiple = false
}: SearchableSelectProps<T>) => {

    const toggleValue = (val: T) => {
        if (multiple) {
            if (value.includes(val)) {
                onChange(value.filter(v => v !== val));
            } else {
                onChange([...value, val]);
            }
        } else {
            if (value[0] !== val) {
                onChange([val]);
            }
            setOpen(false);
        }
    };

    return (
        <PopoverBase open={open} setOpen={setOpen} trigger={trigger}>
            <Command>
                <CommandList>
                    {list.map(item => (
                        <CommandItem
                            key={item.value}
                            onSelect={() => toggleValue(item.value)}
                        >
                            {
                                showCheckbox && (
                                    <Checkbox
                                        checked={value.includes(item.value)}
                                        className="mr-1"
                                    />
                                )
                            }
                            {item.icon && <span className="mr-0.5">{item.icon}</span>}
                            {item.label}
                        </CommandItem>
                    ))}
                </CommandList>
            </Command>
        </PopoverBase>
    );
};

export default SearchableSelect;
