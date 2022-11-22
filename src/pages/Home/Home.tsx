import { PeopleTable } from '@/components'
import { People } from '@/data'
import { Person } from '@/models'
import { addFavorite, addPeople } from '@/redux/states'
import store, { AppStore } from '@/redux/store'
import { Checkbox } from '@mui/material'

import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addPeople(People))
  }, [])

  return <PeopleTable />
}

export default Home
