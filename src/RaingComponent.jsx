import { Rating, Stack, Button, Box, Typography } from '@mui/material';
import { useState } from 'react';
export default function RatingComponent() {
    const [value, setValue] = useState(3);

    // function handleClick() {
    //     setValue(value = rating);
    // }
    return (
        <>
            <Stack
                spacing={1}>
                <Rating
                    name="rating"
                    value={value}
                    size="large"
                    precision={0.5}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </Stack>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'var(--orange)',
                    width: '100%',
                    borderRadius: '20px',
                    mt: '1rem',
                    transition: "background 0.5s, color 0.5s",
                    "&:hover": {
                        backgroundColor: 'white',
                        color: 'var(--orange)'
                    }
                }}
            >
                submit
            </Button>
        </>
    )
}