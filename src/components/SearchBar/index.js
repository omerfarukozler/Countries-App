import { OutlinedInput } from '@mui/material'
import React from 'react'
import PropType from 'prop-types'

function SearchBar({ setFilterText, filterText }) {
  return (
    <OutlinedInput
      style={{ padding: 0 }}
      value={filterText}
      placeholder="Search for a country..."
      onChange={(e) => setFilterText(e.target.value)}
      sx={{
        height: "40px",
        width: '100%',
        marginTop: "5px",
        maxWidth: 400,
        bgcolor: 'white',
        borderRadius: 2,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    />
  )
}

SearchBar.propType = {
  setFilterText: PropType.func.isRequired,
  filterText: PropType.string.isRequired,
}

export default SearchBar
