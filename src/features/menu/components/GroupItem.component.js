import React, { useState } from 'react';
import { MenuItem } from './MenuItem.component';
import styled from 'styled-components/native';
import { useTheme } from 'react-native-paper';

const MenuGroupContainer = styled.View``;
const ListsContainer = styled.View`
  padding-left: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[3]};
  border-left-width: 1px;
  border-left-color: ${(props) => props.theme.colors.iconSecondary};
`;

const MenuGroup = ({ group }) => {
  const [opened, setOpened] = useState(false);
  const [currentLists, setCurrentLists] = useState([]);

  const { name, lists = [] } = group;
  const theme = useTheme();

  const renderListItem = (item, index) => {
    return (
      <MenuItem
        leftIcon={{ style: 'simpleLineIcons', name: 'list', color: theme.colors.task }}
        name={item.name}
        key={index}
      />
    );
  };

  const toggleGroupOpen = () => {
    if (!opened) {
      setCurrentLists(lists);
    } else {
      setCurrentLists([]);
    }
    setOpened(!opened);
  };

  const optionPress = () => {
    console.log('option press');
  };

  return (
    <MenuGroupContainer>
      {opened ? (
        <MenuItem
          leftIcon={{ type: 'foundation', name: 'folder', color: theme.colors.icon }}
          name={name}
          rightIcon={{
            type: 'feather',
            name: opened ? 'chevron-down' : 'chevron-right',
            color: theme.colors.icon,
          }}
          onPress={toggleGroupOpen}
          menuOptionPress={optionPress}
        />
      ) : (
        <MenuItem
          leftIcon={{ type: 'foundation', name: 'folder', color: theme.colors.icon }}
          name={name}
          rightIcon={{
            type: 'feather',
            name: opened ? 'chevron-down' : 'chevron-right',
            color: theme.colors.icon,
          }}
          onPress={toggleGroupOpen}
        />
      )}
      <ListsContainer>
        {currentLists.map((item, index) => {
          return renderListItem(item, index);
        })}
      </ListsContainer>
    </MenuGroupContainer>
  );
};

export default MenuGroup;
