export const Task = ({task}) => {
    return (
        <div>
            <input type="checkbox"/>
            <p>{task.text}</p>
            <button>Button</button>
        </div>
    )
}