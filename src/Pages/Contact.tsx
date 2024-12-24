import { Avatar, Box, Button, Card, Stack, TextField, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Contact = () => {
  return (
    <div style={{ margin: 'auto', width: '100%',marginTop:'100px', padding: 2 ,  backgroundColor: '#f5f5f5'}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90%', margin: 'auto', alignItems: 'center', my: 8 }} >
        <Card sx={{ width: '30%', textAlign: 'center', borderRadius: 2, boxShadow: 2 }} >
          <Typography variant="h5" sx={{ my: 2 }}>Chat Support</Typography>
          <Typography color={'#757575'}>Our support team is jus a click away</Typography>
          <Button sx={{ my: 2 }}>Chat now <ArrowForwardIcon /> </Button>
        </Card>
        <Card sx={{ width: '30%', textAlign: 'center', borderRadius: 2, boxShadow: 2 }}>
          <Typography variant="h5" sx={{ my: 2 }}>Email Support</Typography>
          <Typography color={'#757575'}>Prefer to email ? Send us an email and we'll get back to you soon</Typography>
          <Button sx={{ my: 2 }}>Send Email <ArrowForwardIcon /> </Button>
        </Card>
        <Card sx={{ width: '30%', textAlign: 'center', borderRadius: 2, boxShadow: 2 }}>
          <Typography variant="h5" sx={{ my: 2 }}>Help Center</Typography>
          <Typography color={'#757575'}>Our Self-serve Help center is opne 24/7 with 150+ articles to help</Typography>
          <Button sx={{ my: 2 }}>Visit Help Center <ArrowForwardIcon /> </Button>
        </Card>
      </Box>
      <Box sx={{ width: '30%', margin: 'auto', my: 8 }} >
        <Typography variant="h6" sx={{ fontSize: '30px', my: 2 }}>Love to hear from you:- </Typography>
        <Stack direction={'row'}>
          <TextField sx={{ width: '400px',backgroundColor:'white' }} label='give your feedback' type="text" />
          <Button variant="contained" sx={{ width: '150px', mx: 4, height: '40px', mt: 1 }}>Submit <ArrowForwardIcon /></Button>

        </Stack>


      </Box>
      <Box sx={{ width: '90%', margin: 'auto', mt: 8, }}>
        <Typography variant="h6" sx={{ fontSize: '30px', my: 1 }}>Talk to our customers :-</Typography>
        <Typography>Amazing reviews from our customers. We love hearing from all of them!</Typography>
        <Box sx={{ display: 'flex', margin: 'auto', alignItems: 'center', my: 4, gap: '20px', p: 2 }}  >
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <Avatar sx={{ width: '13%', margin: 'auto' }} />
            <Typography>Satyam.</Typography>
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic', my: 2 }}>The service was exceptional! I couldn’t be happier with my experience.</Typography>

          </Card>
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <Avatar sx={{ width: '12%', margin: 'auto' }} />
            <Typography>Monika.</Typography>
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic', my: 2 }}>The perfect blend of taste and presentation. A truly unforgettable  experience!.</Typography>

          </Card>
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <Avatar sx={{ width: '13%', margin: 'auto' }} />
            <Typography>Richa.</Typography>
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic', my: 2 }}>Truly outstanding taste and service to Customer. Highly recommend!"</Typography>

          </Card>
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <Avatar sx={{ width: '12%', margin: 'auto' }} />
            <Typography>Jyoti.</Typography>
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic', my: 2 }}>The meals were absolutely delicious! Fresh ingredients and perfectly seasoned.</Typography>

          </Card>
          <Card sx={{ width: '30%', textAlign: 'center', p: 2 }}>
            <Avatar sx={{ width: '13%', margin: 'auto' }} />
            <Typography>Deepak.</Typography>
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic', my: 2 }}>Every dish was a delight. Can’t wait to order again!.</Typography>

          </Card>


        </Box>


      </Box>

    </div>
  )
}

export default Contact