import { useState } from 'react';
import './App.css';
import Tabs from './components/ui/Tabs';
import RoleManagementTab from './components/RoleManagementTab';
import UserManagementTab from './components/UserManagementTab';

const App = () => {
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);

  const handleAddRole = (newRole) => setRoles([...roles, { id: roles.length + 1, ...newRole }]);
  const handleEditRole = (updatedRole) =>
    setRoles(roles.map((role) => (role.id === updatedRole.id ? updatedRole : role)));
  const handleDeleteRole = (roleId) => setRoles(roles.filter((role) => role.id !== roleId));

  const handleAddUser = (newUser) => setUsers([...users, { id: users.length + 1, ...newUser }]);
  const handleEditUser = (updatedUser) =>
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  const handleDeleteUser = (userId) => setUsers(users.filter((user) => user.id !== userId));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Role-Based Access Control (RBAC) System</h1>
      <Tabs defaultTab="users">
        <Tabs.Tab title="Users">
          <UserManagementTab
            users={users}
            roles={roles}
            onAddUser={handleAddUser}
            onEditUser={handleEditUser}
            onDeleteUser={handleDeleteUser}
          />
        </Tabs.Tab>
        <Tabs.Tab title="Roles">
          <RoleManagementTab
            roles={roles}
            onAddRole={handleAddRole}
            onEditRole={handleEditRole}
            onDeleteRole={handleDeleteRole}
          />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default App;
