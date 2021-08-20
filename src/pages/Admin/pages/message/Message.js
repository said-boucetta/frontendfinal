import { DataGrid } from "@material-ui/data-grid";
import { userRows } from "../../dummyData";
import { useState, useEffect } from "react";
import axios from "axios";
export default function UserList() {
  const [data, setData] = useState(userRows);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:5000/api/message");
      setUsers(
        response.data.map((user) => ({
          ...user,
          id: user._id,
        }))
      );
    };
    getData();
  }, []);
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "pseudo",
      headerName: "Utilisateur",
      width: 200,
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "action",
      headerName: "Message",
      width: 900,

    },
  ];

  return (
    <div className="userList">
      <h1>Messages :</h1>
      {users && (
        <DataGrid
          rows={users}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      )}
    </div>
  );
}
