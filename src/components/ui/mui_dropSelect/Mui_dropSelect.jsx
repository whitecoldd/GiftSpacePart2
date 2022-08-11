/* import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function MuiDropSelect({items, sx}) {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={items}
            sx={sx}
            renderInput={(params) => <TextField {...params} label="Movie" />}
        />
    );
} */


import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

export default function MuiDropSelect({items, sx, label, name}) {
    const defaultProps = {
        options: items,
        getOptionLabel: (option) => option.title,
    };

    const flatProps = {
        options: items.map((option) => option.title),
    };

    const [value, setValue] = React.useState(null);

    return (
        <Autocomplete
            sx={sx}
            options={items}
            renderInput={(params) => (
                <TextField {...params} label={label} name={name} variant="standard" />
            )}
        />
    );
}