import React, { ChangeEvent, KeyboardEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: any) => void;
  addUser: () => void;
  onBlur: () => void;
  onEnter: (e: any) => void;
  error: any;
  totalUsers: number;
  lastUserName?: string;
};

const Greeting = ({
  name,
  setNameCallback,
  addUser,
  onEnter,
  onBlur,
  error,
  totalUsers,
  lastUserName,
}: GreetingPropsType) => {
  const inputClass = error ? s.errorInput : "";

  return (
    <div id={"hw3-form"} className={s.greetingForm}>
      <div className={s.text}>
        {"Людей добавили: "}
        <span id={"hw3-users-total"}>{totalUsers}</span>
      </div>

      <div className={s.inputAndButtonContainer}>
        <div>
          <input
            id={"hw3-input"}
            value={name}
            onChange={setNameCallback}
            className={inputClass}
            onKeyDown={onEnter}
            onBlur={onBlur}
          />
          <div id={"hw3-error"} className={s.error}>
            {error}
          </div>
        </div>

        <button
          id={"hw3-button"}
          onClick={addUser}
          className={s.button}
          disabled={!name.trim()}
        >
          add
        </button>
      </div>

      {lastUserName && (
        <div className={s.greeting}>
          Привет <span id={"hw3-last-user"}>{lastUserName}</span>!
        </div>
      )}
    </div>
  );
};

export default Greeting;
