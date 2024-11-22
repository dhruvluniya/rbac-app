import { useState, useEffect } from 'react';

const useLocalRoles = (initialRoles = []) => {
  const [roles, setRoles] = useState(() => {
    const savedRoles = localStorage.getItem('roles');
    return savedRoles ? JSON.parse(savedRoles) : initialRoles;
  });

  useEffect(() => {
    localStorage.setItem('roles', JSON.stringify(roles));
  }, [roles]);

  const addRole = (newRole) => {
    setRoles(prevRoles => {
      const roleToAdd = {
        ...newRole,
        id: prevRoles.length ? Math.max(...prevRoles.map(r => r.id)) + 1 : 1,
      };
      return [...prevRoles, roleToAdd];
    });
  };

  const editRole = (updatedRole) => {
    setRoles((prevRoles) => {
      return prevRoles.map((role) =>
        role.id === updatedRole.id ? updatedRole : role
      );
    });
    localStorage.setItem('roles', JSON.stringify(roles.map((role) =>
      role.id === updatedRole.id ? updatedRole : role
    )));
  };
  

  const deleteRole = (roleId) => {
    setRoles(prevRoles => prevRoles.filter(role => role.id !== roleId));
  };

  return {
    roles,
    addRole,
    editRole,
    deleteRole,
  };
};

export default useLocalRoles;