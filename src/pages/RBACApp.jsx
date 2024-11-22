import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/shared/Tabs';
import RoleManagementTab from '@/components/RoleManagement/RoleManagementTab';
import UserManagementTab from '@/components/UserManagement/UserManagementTab';
import useRoles from '@/hooks/useRoles';
import useUsers from '@/hooks/useUsers';

const RBACApp = () => {
  const { roles, addRole, editRole, deleteRole } = useRoles([]);
  const { users, addUser, editUser, deleteUser } = useUsers([]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Role-Based Access Control</h1>
      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="roles">Role Management</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <UserManagementTab 
            users={users} 
            onAddUser={addUser} 
            onEditUser={editUser} 
            onDeleteUser={deleteUser} 
          />
        </TabsContent>
        <TabsContent value="roles">
          <RoleManagementTab 
            roles={roles} 
            onAddRole={addRole} 
            onEditRole={editRole} 
            onDeleteRole={deleteRole} 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RBACApp;
