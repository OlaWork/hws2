import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (name: string) => void;
};

export const pureAddUser = (
  name: string,
  setError: any,
  setName: any,
  addUserCallback: any,
) => {
  if (name.trim() === "") {
    setError("фатальная ошибка");
  } else {
    addUserCallback(name);
    setName("");
    setError("");
  }
};

export const pureOnBlur = (name: string, setError: any) => {
  if (name.trim() === "") {
    setError("фатальная ошибка");
  }
};

export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: () => void,
) => {
  if (e.key === "Enter") {
    addUser();
  }
};

const GreetingContainer = ({
  users,
  addUserCallback,
}: GreetingContainerPropsType) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const setNameCallback = (e: any) => {
    setName(e.target.value);

    error && setError("");
  };

  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: any) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = users.length;
  const lastUserName = users.length > 0 ? users[users.length - 1].name : "";

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
