import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import RatingForm from './RatingForm';

export default function Rating() {
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
                <RatingForm />
            </Box >
        </>
    )
}