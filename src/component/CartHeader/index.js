import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useCartContext } from '../../context/Context';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


export default function CartHeader() {
    const {totalArticulos} = useCartContext();
    const showOrNotIcon = totalArticulos === 0;
return (
  !showOrNotIcon && (
    <Link to={{pathname: `/cart/`}} >
        <IconButton aria-label="cart">
        <StyledBadge badgeContent={totalArticulos} color="secondary">
            <ShoppingCartIcon />
        </StyledBadge>
        </IconButton>
    </Link>
    )
);
}
