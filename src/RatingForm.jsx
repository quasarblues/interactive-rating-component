import { Rating, Stack, Button, Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

export default function RatingForm({ value, changeValue, onClick }) {

    return (
        <>
            <Box
                p={3}
                sx={{
                    maxWidth: 300,
                    maxHeight: '100%',
                    backgroundColor: '#252d37',
                    borderRadius: '10%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-around'
                }}
            >
                <StarIcon
                    sx={{
                        color: 'orange',
                        fontSize: 27,
                    }} />
                <Typography
                    variant="h5"
                    component="h1"
                    sx={{
                        color: 'white',
                        fontWeight: 700,
                        mt: '1rem'
                    }}
                >
                    How did we do?
                </Typography>
                <Typography
                    component='p'
                    sx={{
                        color: 'var(--light-grey)',
                        fontSize: 'var(--paragraph-15)',
                        fontWeight: 400,
                        my: '1rem'
                    }}>
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                </Typography>
                <form>
                    <Stack
                        spacing={1}>
                        <Rating
                            name="rating"
                            value={value}
                            size="large"
                            precision={0.5}
                            onChange={changeValue}
                        />
                    </Stack>
                    <Button
                        variant="contained"
                        onClick={onClick}
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
            </Box >
        </>
    )
}