export const TaskForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);
    form.reset()
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Enter task text ..."
      />
      <button type="submit">Add task</button>
    </form>
  );
};
