import React from "react";
import Header from "components/Header";
import UserList from "components/UserList";

function UsersPage() {
  return (
    <>
      <Header />
      <h1>Our clients</h1>
      <UserList />
    </>
  );
}

export default UsersPage;
