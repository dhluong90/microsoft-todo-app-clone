import React, { useState } from 'react';
import { MenuItem } from './MenuItem.component';
import styled from 'styled-components/native';
import { useTheme } from 'react-native-paper';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import EmptyGroup from './EmptyGroup.component';
import List from './List.component';

const MenuGroupContainer = styled.View``;
const ListsContainer = styled.View`
  padding-left: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[3]};
  border-left-width: 2px;
  border-left-color: ${(props) => props.theme.colors.iconSecondary};
`;

const MenuGroup = ({ group, taskLists, optionPress }) => {
  const [opened, setOpened] = useState(false);
  const [currentLists, setCurrentLists] = useState([]);

  const { name } = group;
  const lists = taskLists;
  const theme = useTheme();

  const renderListItem = (item, index) => {
    return <List list={item} key={index} />;
  };

  const toggleGroupOpen = () => {
    if (!opened) {
      setCurrentLists(lists);
    } else {
      setCurrentLists([]);
    }
    setOpened(!opened);
  };

  return (
    <BottomSheetModalProvider>
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
          {currentLists && currentLists.length > 0
            ? currentLists.map((item, index) => {
                return renderListItem(item, index);
              })
            : opened && <EmptyGroup />}
        </ListsContainer>
      </MenuGroupContainer>
    </BottomSheetModalProvider>
  );
};

export default MenuGroup;
