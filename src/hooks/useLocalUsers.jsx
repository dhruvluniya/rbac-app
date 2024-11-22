import { useState, useEffect } from 'react';

const useLocalUsers = (initialUsers = []) => {
  // Initialize state from localStorage or use initialUsers
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : initialUsers;
  });

  // Sync with localStorage whenever users change
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (newUser) => {
    setUsers(prevUsers => {
      const userToAdd = {
        ...newUser,
        id: prevUsers.length ? Math.max(...prevUsers.map(u => u.id)) + 1 : 1,
      };
      return [...prevUsers, userToAdd];
    });
  };

  const editUser = (updatedUser) => {
    setUsers(prevUsers =>
      prevUsers.map(user => user.id === updatedUser.id ? updatedUser : user)
    );
  };

  const deleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };

  return {
    users,
    addUser,
    editUser,
    deleteUser,
  };
};

export default useLocalUsers;