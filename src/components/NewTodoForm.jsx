import React, { useState } from "react";

const NewTodoFrom = ({addTodo}) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="item">Todo Application</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(event) => {
            setNewItem(event.target.value);
          }}
        />
      </div>
      <button>Add</button>
    </form>
  );
};

export default NewTodoFrom;
