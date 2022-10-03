import React, { useState, useRef } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  let [taskList, setTaskList] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const tasksData = useRef(TASKS);

  function changeCategory(category) {
    if(category === "All") {
      setTaskList(tasksData.current)
      setSelectedCategory("All")
      return
    }
    setTaskList(tasksData.current.filter(task => task.category === category))
    setSelectedCategory(`${category}`)
  }

  function addTask(e) {
    e.preventDefault()
    let newTask = {text: `${e.target[0].value}`, category: `${e.target[1].value}`}
    if(e.target[1].value === selectedCategory || selectedCategory === "All") {
      setTaskList([...taskList, newTask])
    } else {
      taskList = [...taskList, newTask]
    }
    
    tasksData.current = [...tasksData.current, newTask]
  }

  function deleteTask(task) {
    setTaskList(taskList.filter((i) => i !== task))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} changeCategory = {changeCategory}/>
      <NewTaskForm categories = {CATEGORIES} addTask = {addTask}/>
      <TaskList taskList = {taskList} deleteTask = {deleteTask}/>
    </div>
  );
}

export default App;
