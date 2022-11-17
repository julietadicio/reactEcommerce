import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from "@mui/material/Badge";

const CartWidget = () => {
    return(
        
            
            <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
    )
}

export default CartWidget