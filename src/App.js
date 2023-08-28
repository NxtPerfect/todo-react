import "./App.css";
import Modal from "./Component/modal.jsx";
import Task from "./Component/task.jsx";
import SortTask from "./Component/sortTask.jsx";
import React, { useState } from "react";

function Header() {
  return <p className="Header">Todo List</p>;
}

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");
  const handleTaskAdd = (title, checked) => {
    setTaskList([
      ...taskList,
      { task: title, status: checked, removed: false },
    ]);
    console.log("new task {}", { title });
    setIsOpen(false);
  };
  const handleTaskStatus = (index) => {
    taskList[index]["status"] = !taskList[index]["status"];
    console.log(taskList[index]["status"]);
  };
  const handleTaskRemove = (index) => {
    const list = [...taskList];
    list.splice(index, 1);
    setTaskList(list);
  };
  const removeDueTasks = () => {
    taskList.forEach((element) => {
      if (element["removed"]) {
        handleTaskRemove(taskList.indexOf(element));
      }
    });
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="Title">
            <Header />
          </div>
          <div className="AppWrapper">
            <div className="AppHeader">
              <button className="AddTask" onClick={() => setIsOpen(true)}>
                Add Task
              </button>
              <SortTask setFilter={setFilter} />
            </div>
            <div
              className="AppContent"
              style={{
                margin: "auto",
                marginTop: "2vh",
                padding: "auto",
              }}
            >
              <div
                id="Task-List"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  margin: "auto",
                  padding: "1rem",
                  minHeight: "4rem",
                }}
              >
                {taskList.map((task, index) => {
                  if (
                    (filter === "incompleted" && !task["status"]) ||
                    (filter === "completed" && task["status"]) ||
                    filter === "all"
                  ) {
                    removeDueTasks();
                    return (
                      <>
                        <Task
                          title={task["task"]}
                          checked={task["status"]}
                          index={index}
                          changeChecked={(status) => (task["status"] = status)}
                          removeTask={(index) =>
                            (taskList[index]["removed"] = true)
                          }
                        />
                      </>
                    );
                  } else
                    return (
                      <p
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          width: "max-content",
                          height: "auto",
                          margin: "auto",
                          padding: ".25rem .5rem",
                          color: "black",
                          backgroundColor: "gray",
                          borderRadius: "0.25rem",
                          fontSize: "1.5rem",
                        }}
                      >
                        No tasks
                      </p>
                    );
                  // after you filter the tasks, they return even if they were deleted
                })}
              </div>
            </div>
            <Modal
              show={isOpen}
              onClose={() => setIsOpen(false)}
              addTask={handleTaskAdd}
              setChecked={handleTaskStatus}
            />
          </div>
        </header>
      </div>
    </>
  );
};

export default App;
