import { Label } from '@mui/icons-material'
import { Box, Button, Divider, Stack, Switch, Typography } from '@mui/material'


const Setting = () => {
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#f5f5f5' }} >
            <Box sx={{ width: '70%', margin: 'auto', display: 'flex', justifyContent: 'space-between', mb: 1, mt: 1 }} >
                <Box sx={{ width: '20%', margin: 'auto', mt: 4, cursor: 'pointer' }}>
                    <Typography variant="h6" mt={16}>Notification</Typography>
                    <Typography color={'#757575'} variant='h6' mt={4}>Privacy & Security</Typography>
                    <Typography color={'#757575'} variant='h6' mt={4}>Help</Typography>
                    <Typography color={'#757575'} variant='h6' mt={4} >Privacy</Typography>
                    <Typography color={'#757575'} variant='h6' mt={4}>Logout</Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ width: '70%', margin: 'auto', mt: 22 }}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
                        <Stack>
                            <Typography>Notification Preferences</Typography>
                            <Typography color={'#757575'}>Receive updates related to order status ,promo codes and more</Typography>
                        </Stack>
                        <Button size='small' variant='contained' color='info' sx={{ width: '100px' }}>Save</Button>

                    </Box>
                    <Divider sx={{ mb: 6 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
                        <Box >
                            <Typography>Enable all</Typography>
                            <Typography color={'#757575'}>Activate all notifications</Typography>
                        </Box>
                        <Switch {...Label} disabled defaultChecked />

                    </Box>
                    <Divider sx={{ mb: 6 }} />



                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
                        <Box>
                            <Typography>NewsLetters</Typography>
                            <Typography color={'#757575'}>Receive newsletter to stay up-to-date with whats brewing in food industry</Typography>
                        </Box>
                        <Switch {...Label} disabled defaultChecked />
                    </Box>

                    <Divider sx={{ mb: 6 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
                        <Box>
                            <Typography>Promos and offers</Typography>
                            <Typography color={'#757575'}>Receive updates about coupons,promotions and money saving offers</Typography>
                        </Box>
                        <Box>
                            <Switch {...Label} defaultChecked />
                            <Switch {...Label} defaultChecked />
                            <Switch {...Label} disabled defaultChecked />
                        </Box>

                    </Box>
                    <Divider sx={{ mb: 6 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
                        <Box>
                            <Typography>Social Notifications</Typography>
                            <Typography color={'#757575'}>Get notified when someone follows your profile or when you get likes and commnets on reviews and photos posted by you</Typography>
                        </Box>
                        <Box display={'flex'}>
                            <Switch {...Label} defaultChecked />
                            <Switch {...Label} disabled defaultChecked />

                        </Box>

                    </Box>
                    <Divider sx={{ mb: 6 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
                        <Box>
                            <Typography>Orders and purchases</Typography>
                            <Typography>Receive updates related to your order status,memberships,table bookings and more</Typography>
                        </Box>
                        <Box>
                            <Switch {...Label} defaultChecked />
                            <Switch {...Label} defaultChecked />
                            <Switch {...Label} disabled defaultChecked />

                        </Box>

                    </Box>
                    <Divider sx={{ mb: 6 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
                        <Box>
                            <Typography>Important updates</Typography>
                            <Typography>Receive Important updates related to your account</Typography>
                        </Box>
                        <Switch {...Label} disabled defaultChecked />
                    </Box>


                </Box>
            </Box>
        </div>
    )
}

export default Setting