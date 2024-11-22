import { useState } from 'react';
import PropTypes from 'prop-types';

const UserForm = ({ roles, onAddUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(roles[0]?.name || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !role) return;

    const newUser = { username, email, role, status: 'Active' };
    onAddUser(newUser);

    setUsername('');
    setEmail('');
    setRole(roles[0]?.name || '');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="input"
      >
        {roles.map((r) => (
          <option key={r.name} value={r.name}>
            {r.name}
          </option>
        ))}
      </select>
      <button type="submit" className="btn">
        Add User
      </button>
    </form>
  );
};

UserForm.propTypes = {
  roles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddUser: PropTypes.func.isRequired,
};

export default UserForm;
