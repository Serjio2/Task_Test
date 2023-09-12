import { Task } from "components/Task/Task"

export const TaskList = () => {
    return (
        <ul>
            {[].map((task) => (
                <li>
                    <Task task={task}/>
                </li>
            ))}
        </ul>
    )
}