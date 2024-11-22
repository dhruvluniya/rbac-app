import PropTypes from "prop-types";
import { useState } from "react";
import Card from "./ui/Card";
import UserForm from "./UserForm";
import UserCard from "./UserCard";
import EditUserModal from "./EditUserModal";
import useLocalUsers from "../hooks/useLocalUsers";
import useLocalRoles from "../hooks/useLocalRoles";

const UserManagementTab = ({ initialUsers = [], initialRoles = [] }) => {
  const { users, addUser, editUser, deleteUser } = useLocalUsers(initialUsers);
  const { roles } = useLocalRoles(initialRoles);
  const [editingUser, setEditingUser] = useState(null);

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleSaveUser = (updatedUser) => {
    editUser(updatedUser);
    setEditingUser(null);
  };

  return (
    <div className="space-y-4">
      <Card>
        <UserForm roles={roles} onAddUser={addUser} />
        <div className="space-y-2">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onEditUser={handleEditUser}
              onDeleteUser={deleteUser}
            />
          ))}
        </div>
      </Card>
      {editingUser && (
        <EditUserModal
          user={editingUser}
          roles={roles}
          onClose={() => setEditingUser(null)}
          onSave={handleSaveUser}
        />
      )}
    </div>
  );
};

UserManagementTab.propTypes = {
  initialUsers: PropTypes.arrayOf(PropTypes.object),
  initialRoles: PropTypes.arrayOf(PropTypes.object),
};

export default UserManagementTab;
