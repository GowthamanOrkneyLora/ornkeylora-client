import React, {useState} from 'react';
import DataTable from '../common/table';
import TextField from '@mui/material/TextField';
import "./style.scss";

export default function OrderDetails() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'deviceName', headerName: 'Device name', width: 170 },
        { field: 'deviceActive', headerName: 'Device Active', width: 170 },
      ];
      
      const rows = [
        { id: 1, deviceName: 'Device 1', deviceActive: true},
        { id: 2, deviceName: 'Device 2', deviceActive: true},
        { id: 3, deviceName: 'Device 3', deviceActive: false},
        { id: 4, deviceName: 'Device 4', deviceActive: true},
        { id: 5, deviceName: 'Device 5', deviceActive: false},
        { id: 6, deviceName: 'Device 6', deviceActive: true},
        { id: 7, deviceName: 'Device 7', deviceActive: true},
        { id: 8, deviceName: 'Device 8', deviceActive: false},
        { id: 9, deviceName: 'Device 9', deviceActive: true},
        { id: 10, deviceName: 'Device 10', deviceActive: true},
        { id: 11, deviceName: 'Device 11', deviceActive: true},
        { id: 12, deviceName: 'Device 12', deviceActive: false},
        { id: 13, deviceName: 'Device 13', deviceActive: true},
        { id: 14, deviceName: 'Device 14', deviceActive: true},
        { id: 15, deviceName: 'Device 15', deviceActive: false},
        { id: 16, deviceName: 'Device 16', deviceActive: true},
      ];

    const [tableRows, changeTableRows] = useState(rows);
    
    const onSearch = (event) => {
        let searchTerm = event.target.value;
        let filteredRows = rows.filter((data) => data.deviceName.toLowerCase().includes(searchTerm.toLowerCase()));
        changeTableRows(filteredRows)
    }
    return <div className='page-wrapper'>
        <div className='page-content'>
            <div className='search-bar'><TextField id="standard-basic" label="Search" onChange={(event) => onSearch(event)} variant="standard" /></div>
            <div className='table-wrapper'>
                <DataTable columns={columns} rows={tableRows}/>
            </div>
        </div>
    </div>
} 