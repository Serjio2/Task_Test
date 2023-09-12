import { StatusFilter } from "components/StatusFilter/StatusFilter"
import { TaskCounter } from "components/TaskCounter/TaskCounter"
import { StyledAppBar } from "./AppBar.styled"

export const AppBar = () => {
    return (
        <StyledAppBar>
            <section>
                <h2>Tasks</h2>
                <TaskCounter/>
            </section>
            <section>
                <h2>Filter by status</h2>
                <StatusFilter/>
            </section>
        </StyledAppBar>
    )
}