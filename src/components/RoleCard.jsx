import PropTypes from 'prop-types';

const RoleCard = ({ role, onEditRole, onDeleteRole }) => {
  return (
    <div className="card">
      <h3>{role.name}</h3>
      <p>Permissions: {role.permissions.join(', ')}</p>
      <button onClick={() => onEditRole(role)} className="btn">
        Edit Role
      </button>
      <button onClick={() => onDeleteRole(role.id)} className="btn btn-danger">
        Delete Role
      </button>
    </div>
  );
};

RoleCard.propTypes = {
  role: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onEditRole: PropTypes.func.isRequired,
  onDeleteRole: PropTypes.func.isRequired,
};

export default RoleCard;
