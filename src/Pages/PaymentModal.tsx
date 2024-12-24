

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,

  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AddCardIcon from '@mui/icons-material/AddCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import MoneyIcon from '@mui/icons-material/Money';
import { useNavigate } from 'react-router-dom';


// import { useProductCreate } from '../HooksApi/ProductApi';



export const PaymentModal = ({ total }: { total: number }) => {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [card,setCard]=useState({
    cardNO:'',
    cv:'',
    
  })
  const [upi,setUpi]=useState({
    upiId:''

  })
  const navigate=useNavigate()
  console.log(total)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      event.preventDefault()
      setExpanded(isExpanded ? panel : false);
    };

    const handleSubmit=()=>{
      if(card.cardNO !=="" || upi.upiId !=="" ){
      window.alert('ORDER PLACED')
      navigate('/menu')
    }else{
      window.alert(' enter details')
    }
      
      

    }


  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Tooltip title={'addproduct'}>
        <Button variant="contained" color="primary" onClick={handleClickOpen} sx={{
          width: '90%',
          m: 4
        }}>
          PROCEED TO PAYMENT <ArrowForwardIcon />
        </Button>
      </Tooltip>

      <Dialog
        sx={{
          '& .MuiDialog-paper': {
            backgroundPosition: 'center',
            minWidth: '65vh'
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          <Typography> <FastfoodIcon />FoodORDER</Typography>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 2, fontSize: '20px' }}><span>Total: </span> <Typography> ₹{total}</Typography></Box>
            <Box>
              <Typography fontSize={'25px'}>How would you like to pay ?</Typography>

              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{mt:2}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Card
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}><AddCardIcon/></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box >
                    <TextField size='small' label='card no' type='number' fullWidth onChange={(e)=>setCard({...card,cardNO:e.target.value})}/>
                    <Box sx={{mt:2,display:'flex',justifyContent:'space-between',gap:4 }}> 
                     <TextField size='small' label='cv' type='number' fullWidth onChange={(e)=>setCard({...card,cv:e.target.value})}/>
                    <TextField size='small' label='exp date'  type='date'  fullWidth />
                    </Box>
                  

                    
                  </Box>
                </AccordionDetails>
              </Accordion>
          
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{mt:2}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    UPI
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}><AddToHomeScreenIcon/></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box >
                    <TextField size='small' label='UPI ID /phone no' type='text' fullWidth onChange={(e)=>setUpi({...upi,upiId:e.target.value})}/>
                   
                    </Box>
                </AccordionDetails>
              </Accordion>
             <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{mt:2}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    CASH
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}><MoneyIcon/></Typography>
                </AccordionSummary>
                <AccordionDetails>
                 <Typography>Pay at Doorstep after dellivered item</Typography>
                </AccordionDetails>
              </Accordion>

            </Box> 
          
          <Box sx={{color:'grey',display:'flex',width:'70%',gap:1,margin:'auto',mt:'70px',fontSize:'20px'}} >
             <Typography>About foodOrder</Typography> <Divider orientation="vertical" variant="middle" flexItem />
              <Typography>Privacy policy</Typography><Divider orientation="vertical" variant="middle" flexItem />
               <Typography>Security</Typography>
          </Box>

          </Container>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button variant="outlined" onClick={handleSubmit}>
            Placed order
          </Button>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};



