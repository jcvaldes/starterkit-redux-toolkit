import { Person } from '@/models'
import { addFavorite } from '@/redux/states'
import { AppStore } from '@/redux/store'
import { Checkbox } from '@mui/material'
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export interface PeopleTableInterface {}

const PeopleTable: React.FC<PeopleTableInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
  const pageSize = 5
  const dispatch = useDispatch()
  const statePeople = useSelector((state: AppStore) => state.people)
  const favoritePeople = useSelector((state: AppStore) => state.favorites)

  const findPerson = (person: Person) =>
    !!favoritePeople.find((p) => p.id === person.id)

  const filterPerson = (person: Person) =>
    selectedPeople.filter((p) => p.id !== person.id)

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person]
    dispatch(addFavorite(filteredPeople))
    setSelectedPeople(filteredPeople)
  }
  const columns = [
    {
      field: 'actions',
      headerName: '',
      type: 'actions',
      sortable: false,
      minWidth: 50, //esta columna tiene un tamaño minimo en px aunque los otros campos se achiquen
      // que es lo que queremos que se vea en el row
      renderCell: (params: GridRenderCellParams) => (
        <>
          <>
            {
              <Checkbox
                size="small"
                checked={findPerson(params.row)}
                onChange={() => handleChange(params.row)}
              />
            }
          </>
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
  useEffect(() => {
    setSelectedPeople(favoritePeople)
  }, [favoritePeople])

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
      rows={statePeople}
      columns={columns}
      getRowId={(row: any) => row.id}
    />
  )
}

export default PeopleTable
