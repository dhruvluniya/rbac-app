import { useState } from 'react';
import PropTypes from 'prop-types';

const EditRoleModal = ({ role, onClose, onSave }) => {
  const [name, setName] = useState(role.name);
  const [permissions, setPermissions] = useState(role.permissions.join(', '));

  const handleSave = () => {
    const updatedRole = {
      ...role,
      name,
      permissions: permissions.split(',').map((perm) => perm.trim()),
    };
    onSave(updatedRole);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Role</h3>
        <div className="form-group">
          <label>Role Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Permissions (comma-separated)</label>
          <input
            type="text"
            value={permissions}
            onChange={(e) => setPermissions(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button onClick={handleSave} className="btn">
            Save
          </button>
          <button onClick={onClose} className="btn btn-danger">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

EditRoleModal.propTypes = {
  role: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditRoleModal;
