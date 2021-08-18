import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [remainder, setRemeinder] = useState(false);

  const onSubmito = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    onAdd({ text, day, remainder });

    setText('');
    setDay('');
    setRemeinder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmito}>
      <div className="form-control">
        <label htmlFor="temp-id">Task Name</label>
        <input
          id="remp-id"
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="temp-id">Day & Time</label>
        <input
          id="temp-id"
          type="text"
          placeholder="Add day and time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="temp-id">Set Remeinder</label>
        <input
          id="temp-id"
          type="checkbox"
          checked={remainder}
          value={remainder}
          onChange={(e) => setRemeinder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

AddTask.defaultProps = {
  onAdd: PropTypes.func,
};

AddTask.propTypes = {
  onAdd: PropTypes.func,
};

export default AddTask;
