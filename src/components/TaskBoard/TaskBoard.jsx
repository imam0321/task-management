import React, { useState } from "react";
import { SearchTask } from "./SearchTask";
import { TaskActions } from "./TaskActions";
import { TaskList } from "./TaskList";
import { AddTaskModal } from "./Modal/AddTaskModal";

export const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["Web", "React", "JS"],
    priority: "High",
    isFavorite: false,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddTask = (newTask) => {
    console.log("object", newTask);
    setTasks([...tasks, newTask]);
    setShowAddModal(false);
  };

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {/* Search Box */}
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        {/* Search Box Ends */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {showAddModal && <AddTaskModal onSave={handleAddTask} />}
          <TaskActions onAddClick={() => setShowAddModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};
