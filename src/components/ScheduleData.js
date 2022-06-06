import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ClientRows } from '../store/TableData';

export default function scheduleData() {

  const columns = [
    { field: 'Date', headerName: 'Date', width: 100 },
    { field: 'Time', headerName: 'Time', width: 100 },
    { field: 'Expert', headerName: 'Expert Name', width: 200 },
    { field: 'Client', headerName: 'Client Name', width: 200 },
    { field: 'Duration', headerName:'Duration', width: 150 },
  ];

  return (
    <div style={{ height: 375, width: 'auto', alignItems:'center'}}>
      <DataGrid
        rows={ClientRows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
