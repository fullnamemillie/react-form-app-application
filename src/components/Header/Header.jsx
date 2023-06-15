import { Typography } from '@mui/material';
import React from 'react'

const Header = () => {
const sxStyle={
    marginTop: "100px",
    textAlign: "center",
    fontSize: "40px",
    color: "crimson",
    textShadow: "1px 1px rgb(142, 14, 40)",

}

  return (
    <Typography sx={sxStyle}>React Form Application</Typography>
  )
}

export default Header;