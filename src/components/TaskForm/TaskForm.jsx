import { Button } from "components/Button/Buton";
import { TaskFormStyled } from "./TaskForm.styled";

export const TaskForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
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
