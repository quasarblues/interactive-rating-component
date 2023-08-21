import { Typography, Box, Button } from "@mui/material";

export default function ThankYou({ value, onClick }) {
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
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box
                    component="img"
                    src="images/illustration-thank-you.svg"
                    alt="small icon of a reciept being printed"
                    sx={{
                        my: '1rem'
                    }}
                >
                </Box>
                <Typography
                    sx={{
                        color: 'var(--orange)',
                        borderRadius: '20px',
                        fontSize: 'var(--paragraph-15)',
                        fontWeight: 400,
                        my: '1rem'
                    }}
                >
                    You selected {value} out of 5
                </Typography>
                <Typography
                    component='h1'
                    variant='h5'
                    sx={{
                        color: 'white'

                    }}
                >
                    Thank you!
                </Typography>
                <Typography
                    component='p'
                    sx={{
                        color: 'var(--light-grey)',
                        fontSize: 'var(--paragraph-15)',
                        fontWeight: 400,
                        my: '1rem',
                        textAlign: 'center'
                    }}>
                    We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
                </Typography>
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
                    Change Rating
                </Button>
            </Box >
        </>
    )
}