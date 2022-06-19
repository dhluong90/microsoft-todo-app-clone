import React from 'react';
import { MenuItem } from './MenuItem.component';
import { useTheme } from 'react-native-paper';

const List = ({ list }) => {
  const theme = useTheme();
  return (
    <MenuItem
      leftIcon={{ style: 'simpleLineIcons', name: 'list', color: theme.colors.task }}
      name={list.name}
    />
  );
};

export default List;
