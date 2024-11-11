import { Box } from '@mui/material'
import React from 'react'

function Loading() {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </Box>
            </Box>
        </div>
    )
}

export default Loading
