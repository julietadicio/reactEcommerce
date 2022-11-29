import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";
import { useContext } from 'react'
import { CartContext } from './CartContext';

const CartWidget = () => {
  const test = useContext(CartContext);
  return (
    <Badge badgeContent={test.calcItems()} color="primary">
      <ShoppingCartOutlinedIcon />
    </Badge>
  )
}

export default CartWidget