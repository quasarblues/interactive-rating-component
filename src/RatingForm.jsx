import { Rating, Stack, Button, Box, Typography } from '@mui/material';
import { useState } from 'react';
import ThankYou from './ThankYou';
export default function RatingForm() {
    const [value, setValue] = useState(3);

    const handleSubmit = (evt) => {
        console.log(value);
        setValue(newValue);
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
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
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: 'var(--orange)',
                        width: '18rem',
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
            </form>
            <ThankYou value={value} />
        </>
    )
}