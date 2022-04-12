import React from "react";

const Form = () => {
  return (
    <form>
      <input type="text" className="todo-input" />
      <button type="submit" className="todo-button">
          <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
