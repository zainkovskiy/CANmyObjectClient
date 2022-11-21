import React from "react";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export function Linear() {
  return (
    <div className='liner'>
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
        <p className="text"
          style={{
            textAlign: 'center',
            color: '#fff'
          }}
        >
          Идет загрузка...</p>
      </Box>
    </div>
  );
}