import taskLists from './task-lists.mock.json';
import groups from './group.mock.json';
export const fetchList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(taskLists);
    }, 100);
  });
};

export const fetchGroup = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(groups);
    }, 100);
  });
};
