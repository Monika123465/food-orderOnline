import { Box, Divider, Stack, Typography } from "@mui/material"
import { orderdetails } from "../Components/menuList"


const OrderDetails = () => {

  return (
    <div style={{ width: '100%', height:'100%',  backgroundColor: '#f5f5f5'}}  >
   <Typography my={6}>Previous Order Details</Typography>
    <Box sx={{ width: '90%', margin: 'auto', my: 8 ,}} >
        
        {orderdetails.map((el) => {
            return (
                <Box sx={{ width: '90%', margin: 'auto', my: 8 }} key={el.id}>
                  <Stack direction={'row'} spacing={2}>
                    <Typography variant="h6"> order_id:-{el.order_id}</Typography>
                <Typography mt={4}>total:-{el?.total}</Typography>
                  </Stack>
                 <Stack direction={'row'} spacing={2}>
                   <Typography>status:-{el?.status}</Typography>
                <Typography>date:-{el?.date} {'   ' }{el?.time} </Typography>
                </Stack>
               
                <Typography>address:{el?.address}</Typography>
                 <Divider/>
                </Box>
            )
        })} 
       
        
         


    </Box>
    </div>
    
  )
}

export default OrderDetails