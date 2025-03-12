import "./AddTaskForm.css"

const AddTaskForm = ({currentTask, onInputChange, handleAddTask}) => {
    return(
        <>
        <input type="text"
        className="inputForm"
        value={currentTask}
        onChange={onInputChange}
        placeholder="enter new task" />
        <button onClick={handleAddTask}>Add</button>
        </>
    );
};

export default AddTaskForm;