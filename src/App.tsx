import {
    Box,
    Container,
    FormControl,
    Grid,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { generateSimilarHooks } from './api/hooks';

const App = () => {
    const [value, setValue] = useState('');
    const [display, setDisplay] = useState<string[]>([]);
    const [count, setCount] = useState(2);
    const [loading, setLoading] = useState(false);

    const onClick = async () => {
        setLoading(true);
        const res = await generateSimilarHooks(value, count);
        !!res && setDisplay(res);
        setLoading(false);
    };

    const onChangeCount = (event: SelectChangeEvent<any>) =>
        setCount(event.target.value);

    return (
        <Container maxWidth='lg'>
            <Grid container spacing={2} marginTop={20}>
                <Grid item xs={6}>
                    <TextField
                        id='standard-basic'
                        placeholder='Hey there 👋 Want to skip the form and chat with someone now?'
                        variant='standard'
                        fullWidth
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormControl variant='standard' fullWidth>
                        <Select
                            labelId='count-label'
                            id='demo-simple-select'
                            value={count}
                            label='Count'
                            onChange={onChangeCount}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <LoadingButton
                        loading={loading}
                        variant='contained'
                        onClick={onClick}
                    >
                        Generate
                    </LoadingButton>
                </Grid>
                <Grid xs={12}>
                    <Box marginTop={5}>
                        <ul>
                            {display.map((item, index) => (
                                <li key={item + index}>{item}</li>
                            ))}
                        </ul>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
