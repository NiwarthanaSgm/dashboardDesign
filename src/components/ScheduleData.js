import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ClientRows } from '../../store/Data';

export default function schedulesTable() {

  const columns = [
    { field: 'Date', headerName: 'Date', width: 150 },
    { field: 'Time', headerName: 'Time', width: 150 },
    { field: 'Expert', headerName: 'Expert Name', width: 200 },
    { field: 'Client', headerName: 'Client Name', width: 200 },
    { field: 'Duration', headerName:'Duration', width: 180 },
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
