import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from './ui/Card';
import RoleForm from './RoleForm';
import RoleCard from './RoleCard';
import EditRoleModal from './EditRoleModal';
import useLocalRoles from '../hooks/useLocalRoles';

const RoleManagementTab = ({ initialRoles = [] }) => {
  const { roles, addRole, editRole, deleteRole } = useLocalRoles(initialRoles);
  const [editingRole, setEditingRole] = useState(null); // Track the role being edited

  const handleEditRole = (role) => {
    setEditingRole(role); // Open the modal with the role to be edited
  };

  const handleSaveRole = (updatedRole) => {
    editRole(updatedRole); // Save changes
    setEditingRole(null); // Close the modal
  };

  return (
    <div className="space-y-4">
      <Card>
        <RoleForm onAddRole={addRole} />
        <div className="space-y-2">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              role={role}
              onEditRole={handleEditRole}
              onDeleteRole={deleteRole}
            />
          ))}
        </div>
      </Card>
      {editingRole && (
        <EditRoleModal
          role={editingRole}
          onClose={() => setEditingRole(null)}
          onSave={handleSaveRole}
        />
      )}
    </div>
  );
};

RoleManagementTab.propTypes = {
  initialRoles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      permissions: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default RoleManagementTab;
