import { useState } from 'react';
import PropTypes from 'prop-types';

const RoleForm = ({ onAddRole }) => {
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !permissions) return;

    const newRole = {
      name,
      permissions: permissions.split(',').map((p) => p.trim()),
    };

    onAddRole(newRole);
    setName('');
    setPermissions('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Role Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
      />
      <input
        type="text"
        placeholder="Permissions (comma-separated)"
        value={permissions}
        onChange={(e) => setPermissions(e.target.value)}
        className="input"
      />
      <button type="submit" className="btn">
        Add Role
      </button>
    </form>
  );
};

RoleForm.propTypes = {
  onAddRole: PropTypes.func.isRequired,
};

export default RoleForm;
