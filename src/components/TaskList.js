import React from "react";
import Task from "./Task";

function TaskList({taskList, deleteTask}) {

  let list = taskList.map((task) => {
    return (
      <Task task = {task} key = {task.text} deleteTask = {deleteTask}/>
    )
  })

  return (
    <div className="tasks">
      {list}
    </div>
  );
}

export default TaskList;
