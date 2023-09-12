import { MdClose } from 'react-icons/md';
import { TaskStyled } from './TaskStyled';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/actions';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));
  
  return (
    <TaskStyled>
      <input type="checkbox" onChange={handleToggle} checked={task.completed} />
      <p>{task.text}</p>
      <button type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </TaskStyled>
  );
};


