
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import FastfoodIcon from '@mui/icons-material/Fastfood';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Link } from 'react-router-dom';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { UserContext } from '../Context/Authcontext';

import { Avatar,  IconButton, Menu, MenuItem, Tooltip, } from '@mui/material';

import FoodBankIcon from '@mui/icons-material/FoodBank';
// import { Logout } from '@mui/icons-material';
 






const page = [
 
  
  {
    title: 'Menu',
    icon: <MenuIcon />,
    route: '/menu'
  },
  {
    title: 'Cart',
    icon: <AddShoppingCartIcon />,
    route: "/cart",


  },
  {
    title: 'Contact',
    icon: <ContactPageIcon/>,
    route: '/contact'
  },
  {
    title:'Order ',
    icon:<FoodBankIcon/>,
    route:'/orderdetails'
  }
  
]
 
const Profile = [
  {
    title: 'Profile',
   
    route: '/profile'
  },
   {
    title:'Setting',
  
    route:'/setting'
  },
  {
    title: 'Logout',
    route: '',
   
  },
 

];

 
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
 const {user,Logout}=React.useContext(UserContext)
 

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
 
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  console.log(anchorElNav)

  return (
    <>
    <AppBar sx={{height:'120px',paddingTop:'20px'}} >
      <Container >
        <Toolbar >
          <FastfoodIcon sx={{ display:'flex', justifyContent:'space-between' ,mr: 1 }} />
          <Typography
            variant="h4"
          noWrap
            component={'a'}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FoodOrder
          </Typography>


 

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,marginLeft:'80px',gap:'40px',alignItems:'center'}}>
            {page.map((pages) => (

              <Link to={ user ? pages.route : '/login'}>
                <Box
                  key={pages.title}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white',display:'flex',gap:1, }}
                 

                ><Typography sx={{mt:1}}>{pages.icon}</Typography><Typography sx={{fontSize:'28px',textDecoration: 'none'}} >{pages.title}</Typography></Box>
                </Link>

            ))}
          </Box>

            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {Profile.map((setting) => (
                <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                 <Link to={setting.route}>
                 <Typography textAlign="center">{setting.title}</Typography>
                 </Link>  
                </MenuItem>
              ))}
            </Menu>
          </Box>
         {/* <Person2Icon/>
       
          <Button size='small' variant='outlined' sx={{color:'whitesmoke',backgroundColor:'error'}} onClick={()=>{user ? Logout() : <Login/>}}>
                            {user ? "LOGOUT" : "LOGIN"}
                        </Button> 
         */}
        </Toolbar>
            
      </Container>
        
    </AppBar>
    
      
         
      </>
  );
}

export default Navbar