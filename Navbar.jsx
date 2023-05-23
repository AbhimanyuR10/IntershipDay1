import { AppBar, Toolbar, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color={'black'} sx={{ mr: 1 }} align='left'> New App</Typography>
                <button>Login</button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar