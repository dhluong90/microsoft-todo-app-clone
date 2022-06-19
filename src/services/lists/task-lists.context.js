import React, { useState, useEffect } from 'react';
import { fetchList, fetchGroup } from './task-lists.service';
import { Text } from 'react-native';

export const TaskListsContext = React.createContext();

export const TaskListsContextProvider = ({ children }) => {
  const [taskLists, setTaskLists] = useState([]);
  const [groups, setGroups] = useState([]);

  const addTasklist = (taskList) => {
    setTaskLists([...taskLists, taskList]);
  };

  useEffect(() => {
    console.log('this provider come in');
    fetchList()
      .then((result) => {
        console.log(result);
        setTaskLists(result);
      })
      .catch((error) => {
        console.log(error);
        setTaskLists([]);
      });
    fetchGroup()
      .then((result) => {
        setGroups(result);
      })
      .catch((error) => {
        console.log(error);
        setGroups([]);
      });
  }, []);

  return (
    <TaskListsContext.Provider
      value={{
        taskLists,
        addTasklist,
        groups,
      }}
    >
      {children}
    </TaskListsContext.Provider>
  );
};
