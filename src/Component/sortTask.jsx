import React from "react";
import styles from "./sortTask.module.css";

const SortTask = ({ setFilter }) => {
  return (
    <select
      id="sorting"
      className={styles.SortingList}
      onChange={(e) => setFilter(e.target.value)}
    >
      All
      <option value="all">All</option>
      <option value="incompleted">Incompleted</option>
      <option value="completed">Completed</option>
    </select>
  );
};

export default SortTask;
