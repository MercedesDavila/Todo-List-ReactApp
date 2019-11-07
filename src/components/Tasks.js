import React from 'react';
import { Checkbox } from '../components/Checkbox';

export const Tasks = () => {
    const tasks = [];

    let projectName : '' ;

    return (
        <div className="tasks" data-textid="tasks">

            <ul className="tasks_list">
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} taskDesc={task.task} />
                        <span>{task.task}</span>

                    </li>
                ))}

            </ul>

            {/* <AddTask /> */}

        </div>
    )

}