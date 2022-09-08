import React from 'react';
import UserList from './Components/User/UserList';

function App() {
  let testUsers = [
    {userName: 'bob'},
    {userName: 'frank'},
    {userName: 'Joe'}
];
  return (
    <UserList users={testUsers}></UserList>
  );
}

export default App;
