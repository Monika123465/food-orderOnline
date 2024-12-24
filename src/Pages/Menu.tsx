import { Box, Typography } from "@mui/material";
import { menulistItem } from "../Components/menuList";
import {  useNavigate, useSearchParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";



export interface MenuItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

const Menu = () => {
  const [menuList, setMenuList] = useState(menulistItem);
  const [amount,] = useState(1);
  const [searchParams] = useSearchParams({});
  const navigate = useNavigate();
  

  useEffect(() => {
    const queryTitle = searchParams.get("title") || "";

    if (queryTitle) {
      const filteredMenu = menulistItem.filter((el) => {
        return el.title.toLowerCase().includes(queryTitle.toLowerCase());
      });

      setMenuList(filteredMenu);
    }
  }, [searchParams]);

  const handleClick = (item: MenuItem) => {
    // navigate(`../menu/${item.id}`,{state:{item}})
    const itemWithQuantity = { ...item, quantity: amount };
    navigate("../cart", { state: { item: itemWithQuantity } });
  };

  return (
    
    
    <Box>
      <Box sx={{ width: "186vh", my: "140px", marginLeft: "90px" }}>
        <Typography component={"h1"} sx={{ p: 2 }} variant="h3">
          Menu List
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: "40px",
            marginTop: "20px",
            flexGrow: 2,
            gridTemplateColumns: "repeat(4,1fr)",
            sm: { gridTemplateColumns: "repeat(2,1fr)" },
          }}
        >
          {menuList.map((item) => (
            <Box
              key={item.title}
              sx={{
                cursor: "pointer",
                p: 2,
                boxShadow: 4,
                textAlign:"center"
              }}
            >
              <Typography component="div" onClick={() => handleClick(item)}>
                <img
                  src={item.image}
                  style={{
                    width: 350,
                    height: 300,
                    padding: 4,
                  
                  }}
                />
                <Typography
                  sx={{ textAlign: "center", margin: "4px", fontSize: "20px" }}
                  title={item.title}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ margin: "4px", fontSize: "20px" }}>
                  {item.description}
                </Typography>
              </Typography>
              <Box display={"flex"} justifyContent={"space-between"} margin={2}>
                <Typography sx={{ textAlign: "center", fontSize: "20px" }}>
                  {" "}
                  ₹{item.price}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography>{item.rating}</Typography>
                  
                  <StarRoundedIcon sx={{color:'#ff9100'}}  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

      </Box>
      
    </Box>
      
  );
};

export default Menu;
