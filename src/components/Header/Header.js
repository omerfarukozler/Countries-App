import React from 'react'
import PropTypes from 'prop-types'
import { Box, OutlinedInput, Typography } from '@mui/material'
import { motion } from 'framer-motion';

function Header({ setFilterText, filterText }) {

  return (
    <div className='header' style={{ backgroundColor: "#3168d5", height: "120px", width: "100%" }}>
      <Box padding={2}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <Typography color='white' variant="h5">
            Welcome to Countries App
          </Typography>
        </motion.div>
        <OutlinedInput
          style={{ padding: 0 }}
          value={filterText}
          placeholder="Search for a country..."
          onChange={(e) => setFilterText(e.target.value)}
          sx={{
            height:"40px",
            width: '100%',
            marginTop:"5px",
            maxWidth: 400,
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        />
      </Box>
    </div>
  )
}
Header.propTypes = {
  setFilterText: PropTypes.func,
  filterText: PropTypes.string
}

export default Header
