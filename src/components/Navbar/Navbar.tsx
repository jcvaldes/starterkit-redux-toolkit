import { AppStore } from '@/redux/store'
import { Favorite } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { CustomDialog } from '../CustomDialog'
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog'
import { FavoriteTable } from './FavoriteTable'
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const stateFavorites = useSelector((state: AppStore) => state.favorites)

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true
  }
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Getleman Programming React Test
          </Typography>
          <IconButton
            color="secondary"
            aria-label="favorites"
            component="label"
            onClick={handleClick}
          >
            <Favorite />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
