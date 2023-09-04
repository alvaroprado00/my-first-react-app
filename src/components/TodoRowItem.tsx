import React from "react"

export const TodoRowItem: React.FC<{
    rowNumber:number,
    rowDescription:string,
    rowAssigned:string,
    deleteTodo:Function
}> = (props)=> {

    return (
        <tr>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
            <td><i className="fa-solid fa-trash" onClick={() => props.deleteTodo(props.rowNumber)}></i></td>
      </tr>
    )
}
