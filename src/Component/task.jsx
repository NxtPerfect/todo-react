import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from "dompurify";
import styles from "./task.module.css";

const Task = ({ title, checked, index, changeChecked, removeTask }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const [isRemoved, setIsRemoved] = useState(false);

  return (
    <div
      className={styles.Wrapper}
      style={{
        scale: isRemoved ? "0" : "1",
        position: isRemoved ? "fixed" : "relative",
      }}
    >
      <div className={styles.Task}>
        <input
          id="completed"
          name="completed"
          type="checkbox"
          className={styles.check_finished}
          defaultChecked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
            changeChecked(!checked);
          }}
        ></input>
        <label
          htmlFor="completed"
          id="task"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(title),
          }}
          style={{
            textDecoration: isChecked ? "line-through" : "none",
          }}
        ></label>
        <div>
          <FontAwesomeIcon
            icon={faTrash}
            className={styles.trash}
            onClick={() => {
              setIsRemoved(true);
              removeTask(index);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Task;
  
  
    
      
      
      
