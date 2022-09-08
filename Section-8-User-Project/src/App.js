import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
function App() {
  const [currentUsers, setCurrentUsers] = useState([
    { userName: "bob", userAge: 30, key: '1' },
  ]);
  const onAddUserHandler = (userData) => {
    setCurrentUsers((prevUsers) => {
      return [...prevUsers, userData]
    })
  }
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler}/>
      <UsersList users={currentUsers} />
    </div>
  );
}

export default App;
