import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => (
  <div>
    {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} onToggler={onToggle} />
    ))}
  </div>
);

Tasks.defaultProps = {
  tasks: PropTypes.string,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};

Tasks.propTypes = {
  tasks: PropTypes.string,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};

export default Tasks;
