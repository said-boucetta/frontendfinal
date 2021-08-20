import React from "react";
import Topbar from "./components/topbar/Topbar";
// import Sidebar from "./components/sidebar/Sidebar";
import AdminHome from "./pages/AdminHome";
import "./Admin.css";


function Admin() {
  return (

<div>
  <Topbar/>
  <AdminHome/>
      </div>

  );
}
export default Admin;
// return (
//   <Router>
//     <Topbar />
//     <div className="container">
//       <Sidebar />
//           <Switch>
//       <Route exact path="/">
//       <AdminHome />
//         </Route>
//         <Route exact path="/user">
//       <UserList/>
//         </Route>

//         <Route exact path="/message">
//       <Message />
//         </Route>

//       </Switch>
//     </div>
//   </Router>
// );
