import React from 'react'
import { Autocomplete } from '@mui/material'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import './styles.css'


const Header = () => {
  
    return(
        <AppBar position='static'>
           <Toolbar className='toolbar'>
             <Typography variant='h5' className='title'>
                Travel-Visor
             </Typography>
             <Box display="flex">
               <Typography variant='h6' className='title secondetitle'>
                  Explore new places
               </Typography>
               {/* <Autocomplete> */}
                 <div className='search'>
                   <div className='searchIcon'>
                     <SearchIcon />
                   </div>
                   <InputBase placeholder='Search...' className='inputRoot inputInput' />
                 </div>
               {/* </Autocomplete> */}
             </Box>
           </Toolbar>
        </AppBar>
    )
}

export default Header