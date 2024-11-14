import { Box, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import PropTypes from 'prop-types'

const Continents = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
]

function HamburgerMenu({ onContinentSelect, selectedContinent }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleContinentClick = (continent) => {
        onContinentSelect(continent)
        handleClose();
    };
    return (
        <Box>
            <RxHamburgerMenu onClick={handleClick} style={{ fontSize: 30, marginLeft: 5, marginTop: 5, color: "white", cursor: "pointer" }} />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                {Continents.map((continent, key) => (
                    <MenuItem
                        sx={{
                            backgroundColor: selectedContinent === continent ? '#3168d5' : 'transparent',
                            color: selectedContinent === continent && 'white',
                            '&:hover': {
                                backgroundColor: selectedContinent === continent ? '#3168d5' : '#3168d5',
                                color: selectedContinent === continent && 'white',
                            },
                        }}
                        key={key}
                        className='menu-item'
                        onClick={() => handleContinentClick(continent)}
                    >
                        {continent}
                    </MenuItem>
                ))}
            </Menu>
        </Box >
    )
}
HamburgerMenu.propTypes = {
    onContinentSelect: PropTypes.func.isRequired,
    selectedContinent: PropTypes.string.isRequired,
  }

export default HamburgerMenu
