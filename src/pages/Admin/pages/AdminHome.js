import React from "react";
import Other from "../components/others/Other";
// import ProductList from "../components/productList/ProductList";
import UserList from "../components/userList/UserList";
import Message from "./message/Message";
import "./adminHome.css";

export default function Home() {
  return (
    <div className="home">
      <div className="homeWidgets">
        <UserList />
      </div>
      <div className="homeWidget2">
      <Message />
    </div>
    </div>
  );
}
