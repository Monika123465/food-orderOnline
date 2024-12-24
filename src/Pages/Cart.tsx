import { useEffect, useState } from 'react'

import { useLocation,useNavigate} from 'react-router-dom'
import { MenuItem } from './Menu';
import { Box, Button, colors, Divider, Stack, TextField, Typography } from '@mui/material';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PaymentModal } from './PaymentModal';



const Cart = () => {
  const [cartitem, setCartitem] = useState<MenuItem[]>([])
  console.log(cartitem)
  

  const location = useLocation()
  const navigate=useNavigate()
  
  useEffect(()=>{
    const savedCartItems=localStorage.getItem('cartItems')
    if(savedCartItems){
      setCartitem(JSON.parse(savedCartItems))
    }

  },[])
   useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartitem));
  }, [cartitem]);

  useEffect(() => {
    if (location?.state?.item) {
      
      setCartitem(prevItems => {
        const existingItemIndex = prevItems.findIndex(item => item.id === location.state.item.id);
        if (existingItemIndex !== -1) {
          const newCartItems = [...prevItems];
          newCartItems[existingItemIndex].quantity += location.state.item.quantity;
          return newCartItems;
        } else {
          return [...prevItems, location.state.item];
        }
      });
      navigate('.',{replace:true})
    }
  }, [location.state,navigate]);
  const handleIncrease = (index: number) => {
    const newCartItems = [...cartitem];
    newCartItems[index].quantity += 1;
    setCartitem(newCartItems);
  };

  const handleDecrease = (index: number) => {
    const newCartItems = [...cartitem];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartitem(newCartItems);
    }
  };

  const handleRemove = (index: number) => {
    const newCartItems = cartitem.filter((_, i) => i !== index);
    setCartitem(newCartItems);
  };

  const getSubtotal=()=>{
    return cartitem.reduce((acc,item)=>acc+item.price*item.quantity,0)
  }
 
  return (
    <div style={{ width: '100%', height:'100%',  backgroundColor: '#f5f5f5'}}  >


      <Box>
        <Typography sx={{fontSize:'30px',width:'20%',margin:'auto',my:4,textAlign:'center',color:colors.blue[400]}}>Your Cart</Typography><Divider sx={{m:6}}/>
        {cartitem.length > 0 ? (
          cartitem.map((item, index) => (
            <Box key={index} sx={{ p: 2, boxShadow: 4, display: 'flex', width: "180vh", alignItems: 'center', margin: "auto", gap: '40px',mt:2,backgroundColor: '#fff' }}>
              < Typography width='200px'><img style={{ width: '100%' }} src={item.image} /></Typography>

              <Typography variant='h5'>{item.title}</Typography>
              <Typography>{item.description}</Typography>
              <Typography sx={{ width: '120px' }}>Price: ₹{item.price}</Typography>
              <Box display='flex' alignItems='center'>
                <Button variant='contained' onClick={() => handleDecrease(index)}>-</Button>
                <TextField
                  type='number'
                  size='small'
                  value={item.quantity}
                  sx={{ width: '60px', mx: 1 }}
                  inputProps={{ readOnly: true }}
                />
                <Button variant='contained' onClick={() => handleIncrease(index)}>+</Button>
              </Box>
              <Button color='error' variant='outlined' sx={{ width: '80px', height: '40px', border: 1 }} onClick={() => handleRemove(index)}><DeleteForeverIcon /></Button>
            </Box>
          ))
        ) : (
          <Typography sx={{width:'30%',margin:'auto',textAlign:'center',fontSize:'30px'}}>No items in the cart</Typography>
        )}
      </Box>
      <Divider sx={{m:6}}/>
      <Box sx={{width:'184vh',margin:'auto',mt:4,display:'flex',justifyContent:'space-between',}}>
          <Box sx={{ display:'flex',gap:4,m:15,}} >
            <TextField label='Coupon Code' type='text' sx={{width:"400px", backgroundColor: '#fff',height:'55px'}} />
            <Button variant='contained' sx={{width:'250px',height:'55px'}} size='small'>Apply Coupon <ArrowForwardIcon/> </Button>
          </Box>
          <Stack sx={{width:'30%',boxShadow:2,borderRadius:4,textAlign:'center',p:4,backgroundColor: '#fff',mb:4}}>
            <Typography>Cart Total</Typography>
            <Box sx={{display:'flex',justifyContent:'space-between',m:2,fontSize:'20px'}}>  <span>SubTotal: </span> <Typography> ₹{getSubtotal()}</Typography></Box><Divider/>
              <Box sx={{display:'flex',justifyContent:'space-between',m:2,fontSize:'20px'}}><span>Total: </span> <Typography> ₹{getSubtotal()}</Typography></Box>
          
            <PaymentModal   total={getSubtotal()}/>

          </Stack>

      </Box>
    </div>
  )
}

export default Cart