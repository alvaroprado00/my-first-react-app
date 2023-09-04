import React, { useState } from "react";

export const NewTodoForm: React.FC<{addTodo:Function}> = (props)=>{

    const [description, setDescription] = useState ('')
    const [assigned, setAssigned]= useState ('')

    const descriptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setDescription(event.target.value)
    }

    const assignedChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setAssigned(event.target.value)
    }

    const submitTodo = () => {
        if (description!=='' && assigned!==''){
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={assignedChange}
                        value={assigned}
                        required>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea 
                    
                        className="form-control"
                        rows={3}
                        required onChange={descriptionChange}
                        value={description}>
                    </textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitTodo}>Add Todo</button>
            </form>
        </div>
    )
}

