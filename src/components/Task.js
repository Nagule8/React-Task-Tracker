import React, { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Task = ({ task, onDelete, onToggler }) => (
  <div className={`task ${task.remainder ? 'reminder' : ''}`} onDoubleClick={() => onToggler(task.id)}>
    <h3>
      {task.text}
      <FaTimes
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={() => onDelete(task.id)}
      />
    </h3>
    <p>{task.day}</p>
  </div>
);

Task.defaultProps = {
  task: PropTypes.string,
  onDelete: PropTypes.func,
  onToggler: PropTypes.func,
};

Task.propTypes = {
  task: PropTypes.string,
  onDelete: PropTypes.func,
  onToggler: PropTypes.func,
};

export default Task;
