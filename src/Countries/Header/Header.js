import React from 'react'
import PropTypes from 'prop-types'
import { Box, OutlinedInput, Typography } from '@mui/material'
import { motion } from 'framer-motion';
import SearchBar from '../../components/SearchBar';

function Header({ setFilterText, filterText }) {

  return (

    <Box style={{ backgroundColor: "#3168d5", height: "120px", width: "100%", padding: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <Typography color='white' variant="h5">
          Welcome to Countries App
        </Typography>
      </motion.div>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
    </Box>
  )
}
Header.propTypes = {
  setFilterText: PropTypes.func,
  filterText: PropTypes.string
}

export default Header
