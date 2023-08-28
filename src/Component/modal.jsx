import React, { useState } from "react";
import styles from "./modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ show, onClose, addTask }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);
  const handleChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };
  if (!show) return null;
  return (
    <>
      <div className={styles.darkBG}>
        <div className={styles.divWrapper}>
          <RiCloseLine
            className={styles.closeBtn}
            onClick={onClose}
          ></RiCloseLine>
          <form className={styles.wrapper}>
            <h1>Add TODO</h1>
            <label className={styles.label} htmlFor="title">
              Title
              <input
                className={styles.input}
                id="title"
                type="text"
                name="title"
                onChange={handleChange}
                required
                value={title}
              />
            </label>
            <label className={styles.label} htmlFor="status">
              Status
              <select
                className={styles.input}
                onChange={(e) => {
                  setStatus(e.target.value === "true");
                }}
                id="status"
              >
                <option value="false">Incomplete</option>
                <option value="true">Complete</option>
              </select>
            </label>
            <div className={styles.bottomCon}>
              <button
                className={styles.addButton}
                onClick={(e) => {
                  addTask(title, status, e);
                  setStatus(false);
                  setTitle();
                }}
              >
                Add task
              </button>
              <button className={styles.closeButton} onClick={onClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
