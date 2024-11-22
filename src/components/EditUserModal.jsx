import { useState } from 'react';
import PropTypes from 'prop-types';

const EditUserModal = ({ user, roles, onClose, onSave, isOpen }) => {
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    role: user.role || '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle saving of updated user info
  const handleSave = () => {
    const updatedUser = {
      ...user,
      username: formData.username,
      email: formData.email,
      role: formData.role,
    };
    onSave(updatedUser);
  };

  // Conditionally render modal if isOpen is true
  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Edit User</h3>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a role
              </option>
              {roles.map((role) => (
                <option key={role.id} value={role.name}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="modal-footer">
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

EditUserModal.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string,
  }).isRequired,
  roles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired, // Ensure modal visibility is controlled by `isOpen`
};

export default EditUserModal;
