import { Button } from "components/Button/Button";
import { TaskFormStyled } from "./TaskForm.styled";
import { useDispatch } from "react-redux";
import { addTask } from "redux/actions";

export const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    // console.log(form);
    form.reset()
  };
  return (
    <TaskFormStyled onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Enter task text ..."
      />
      <Button type="submit">Add task</Button>
    </TaskFormStyled>
  );
};
