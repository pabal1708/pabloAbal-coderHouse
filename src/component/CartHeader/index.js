import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useCartContext } from '../../context/Context';
import { Link } from 'react-router-dom';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default function CartHeader() {
    const {cart} = useCartContext();
return (
    <Link to={{pathname: `/cart/`}} >
        <IconButton aria-label="cart">
        <StyledBadge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon />
        </StyledBadge>
        </IconButton>
    </Link>
);
}
