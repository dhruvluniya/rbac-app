import PropTypes from 'prop-types';

const UserCard = ({ user, onEditUser, onDeleteUser }) => {
  return (
    <div className="card">
      <h3>{user.username}</h3>
      <p>Email: {user.email}</p>
      <p>Role: {user.role || 'No Role Assigned'}</p>
      {/* Improved button text for accessibility */}
      <button onClick={() => onEditUser(user)} className="btn">
        Edit User
      </button>
      <button onClick={() => onDeleteUser(user.id)} className="btn btn-danger">
        Delete User
      </button>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string,
  }).isRequired,
  onEditUser: PropTypes.func.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

export default UserCard;
