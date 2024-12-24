import { Avatar, Box, Button, Paper, Typography } from '@mui/material'
import {  useNavigate } from 'react-router-dom'
import { exploreLife, menuList, menulistItem } from '../Components/menuList'
import {  useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/Authcontext';
import Login from './Login';






export interface Catogrylist {
  category: string,
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}



const Home = () => {

  const [category, setCategory] = useState('')
  const[filteredMenu,setFilteredMenu]=useState(menulistItem)
  const navigate = useNavigate()
  const {user}=useContext(UserContext)

console.log(filteredMenu)

useEffect(() => {
    if (category === '' || category === 'all') {
      setFilteredMenu(menulistItem);
    } else {
      setFilteredMenu(menulistItem.filter(item => item.title === category));
      navigate(`/menu?title=${category}`)
    }
  }, [category]);



  const handleClick = () => {
    
    
    navigate('/menu')
  }
  console.log(user)

  return (
    <div  style={{ width: '100%', height:'100%',  backgroundColor: '#f5f5f5'}}>
    {user  ?
    <Box sx={{ width: "208vh" }}>
      
     
      <Box sx={{
        backgroundImage: 'url(assests/foodimage.jpg)',

        height: '60vh',
        color: 'whitesmoke',
        textAlign: 'center',
        alignItems: 'center'
      }}>
        <Typography component={'h1'} sx={{ marginTop: '3vw', pt: 10 }} variant='h2'>Order your favourite food here</Typography>
        <Typography sx={{ width: '650px', margin: 'auto', fontSize: "25px", }}>Choose from a diversse menu featuring a delectable table array of dishes
          created with the finest ingredients and culinary expertise.OUr mission is to statisfiy
          your cravings and elevate your dining experience,one delicious meal at a time</Typography>
        <Button variant='contained' onClick={handleClick}>View Menu</Button></Box>


      <Box sx={{ width: "150vh", margin: 'auto', marginTop: '40px' }}>
        <Box sx={{ display: 'flex', gap: '60px', marginTop: '20px', }} > {exploreLife.map((item) => <Box component={Paper}
          onClick={() => setCategory(prev => prev === item.menuItem ? "all" : item.menuItem)}
          key={item.menuItem}
          sx={{ cursor: 'pointer', p: 2, boxShadow: 4 }}
        >
          <img src={item.image} style={{

            border: item.menuItem == category ? "2px solid red" : 'none',


          }} />
          <Typography sx={{ textAlign: 'center', margin: '4px', fontSize: '20px' }}  >{item.menuItem}</Typography>

          <Typography sx={{ marginLeft: '30px', fontSize: '20px' }}  >{item.description}</Typography>
        </Box>)}</Box>
      </Box>


      <Box sx={{ width: "180vh", margin: 'auto', marginTop: '80px' }}>
        <Typography component={'h1'} sx={{ p: 2 }} variant='h3'>Explore our menu</Typography>
        <Typography sx={{ fontSize: "25px", p: 1, width: '120vh' }}>Choose from a diversse menu featuring a delectable table array of dishes
          created with the finest ingredients and culinary expertise.Our mission is to statisfiy
          your cravings and elevate your dining experience,one delicious meal at a time</Typography>
        <Box sx={{ display: 'flex', gap: '60px', marginTop: '20px',pb:4 }}  > {menuList.map((item) => <Box component={Paper}
           onClick={() => setCategory(prev => prev === item.menuItem ? "all" : item.menuItem)}
          key={item.menuItem}
          sx={{ cursor: 'pointer', p: 2 }}
        >
          <Avatar src={item.image} sx={{
            width: 200,
            height: 200,
            border: item.menuItem == category ? "2px solid red" : 'none',


          }} />
          <Typography sx={{ textAlign: 'center', margin: '4px', fontSize: '20px' }}  >{item.menuItem}</Typography>
        </Box>)}</Box>



      </Box>



    </Box> : <Login/>}
</div>

  )
}

export default Home