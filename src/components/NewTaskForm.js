import React from "react";

function NewTaskForm({categories, addTask}) {

  let options = categories.filter(category => category !== "All").map((category) => {
    return (
      <option key = {category}>{category}</option>
    )
  })
  return (
    <form className="new-task-form" onSubmit={addTask}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {options}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
