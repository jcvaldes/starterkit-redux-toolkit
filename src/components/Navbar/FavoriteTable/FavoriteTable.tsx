import { Person } from '@/models'
import { addFavorite, removeFavorite } from '@/redux/states'
import { AppStore } from '@/redux/store'
import { Delete } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
  const pageSize = 5
  const dispatch = useDispatch()

  const stateFavorites = useSelector((state: AppStore) => state.favorites)

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person))
  }
  const columns = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <IconButton
              color="secondary"
              aria-label="favorites"
              component="label"
              onClick={() => handleClick(params.row)}
            >
              <Delete />
            </IconButton>
          }
        </>
      )
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150, //esta columna tiene un tamaño minimo en px aunque los otros campos se achiquen
      // que es lo que queremos que se vea en el row
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      // que es lo que queremos que se vea en el row
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      // que es lo que queremos que se vea en el row
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Level of happiness',
      flex: 1,
      // que es lo que queremos que se vea en el row
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    }
  ]
  return (
    <DataGrid
      // sx={{
      //   boxShadow: 2,
      //   border: 2,

      //   borderColor: 'primary.light',
      //   '& .MuiDataGrid-cell:hover': {
      //     color: 'primary.main'
      //   }
      // }}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      // rows={People}
      rows={stateFavorites}
      columns={columns}
      getRowId={(row: any) => row.id}
    />
  )
}

export default FavoriteTable
