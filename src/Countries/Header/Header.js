import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion';
import SearchBar from '../../components/SearchBar';
import HamburgerMenu from '../../components/HamburgerMenu';
import TabsPanel from '../../components/TabsPanel';

function Header({ setFilterText, filterText, onContinentSelect, selectedContinent }) {

  const isMobile = useMediaQuery('(max-width:1100px)')

  return (

    <Box style={{ backgroundColor: "#3168d5", height: "120px", width: "100%", padding: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <Typography marginRight="10px" marginTop="8px" color='#fff' variant="h5">
          Welcome to Countries App
        </Typography>
      </motion.div>
      <Box display="flex" alignItems="center" justifyContent="center" padding="5px">
        <SearchBar filterText={filterText} setFilterText={setFilterText} />
        {isMobile && (
          <Grid item>
            <HamburgerMenu onContinentSelect={onContinentSelect} selectedContinent={selectedContinent} />
          </Grid>
        )}
        {
          !isMobile && (
            <TabsPanel
              onContinentSelect={onContinentSelect}
            />
          )
        }
      </Box>
    </Box>
  )
}
Header.propTypes = {
  setFilterText: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
  onContinentSelect: PropTypes.func.isRequired,
  selectedContinent: PropTypes.string.isRequired,
}

export default Header
