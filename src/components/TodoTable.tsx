import React from "react"
import { TodoRowItem } from "./TodoRowItem"

export const TodoTable: React.FC<{tableContent:TodoModel[], deleteTodo:Function}>= (props)=>{

    return( 
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
               { props.tableContent.map(todo =>(
                    <TodoRowItem
                        deleteTodo={props.deleteTodo} 
                        key={todo.rowNumber}
                        rowNumber={todo.rowNumber} 
                        rowDescription={todo.rowDescription} 
                        rowAssigned={todo.rowAssigned}
                    />
                ))}
            </tbody>

        </table>
    )
}
