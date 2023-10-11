import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import {Delete} from "@mui/icons-material";
import { userRows } from "../../../DummyData";
import { Link } from "react-router-dom";



export default function UserList() {
  const [data,setData] = useState(userRows);

  const handleDelete = (id)=>{
    setData(data.filter(item=>item.id !== id));
  };

  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "user", headerName: "User", width: 200, renderCell: (params)=>{
      return (
        <div className="User">
          <img className="userImg" src={params.row.avatar} alt="profile" />
          {params.row.username}
        </div>
      )
    } },
    { 
      field: "email", 
      headerName: "Email", 
      width: 350
     },
    { 
      field: "status", 
      headerName: "Status", 
      width: 150,
    },
    { 
      field: "transaction", 
      headerName: "Transaction Volume", 
      width: 250,
    },
    {
      field:"action",
      width: 150,
      renderCell: (params)=>{
        return(
          <>
          <Link to={"/user/" + params.row.id}>
          <button className="userListEdit">Edit</button>
          </Link>
          <Delete className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
          </>
        )
         
      } }
   
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
