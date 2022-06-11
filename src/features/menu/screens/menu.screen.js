import React from 'react';
import { MenuItem } from '../components/MenuItem.component';
import { useTheme } from 'react-native-paper';
import MenuGroup from '../components/GroupItem.component';
import { MenuScreenContainer, TopItemsContainer, BreakLine, BreakSpace } from './menu.styled';

const MenuScreen = () => {
  const theme = useTheme();

  const folderList = [
    {
      name: 'Guideline',
      lists: [
        {
          name: 'list 1',
        },
        {
          name: 'list 1',
        },
        {
          name: 'list 1',
        },
        {
          name: 'list 1',
        },
      ],
    },
    { name: 'Guideline' },
    { name: 'Guideline' },
    { name: 'Guideline' },
    { name: 'Guideline' },
    { name: 'Guideline' },
    { name: 'Guideline' },
    { name: 'Guideline' },
    { name: 'Guideline' },
    { name: 'Guideline' },
    { name: 'Guideline' },
    { name: 'Guideline' },
    { name: 'Guideline' },
    { name: 'Guideline' },
  ];
  const renderFolderItem = (folder) => <MenuGroup group={folder} />;
  return (
    <MenuScreenContainer>
      <TopItemsContainer>
        <MenuItem
          leftIcon={{ type: 'ionicons', name: 'ios-sunny-outline', color: theme.colors.icon }}
          name="My Day"
        />
        <MenuItem
          leftIcon={{ type: 'simpleLineIcons', name: 'star', color: theme.colors.important }}
          leftIconColor={theme.colors.important}
          name="Important"
        />
        <MenuItem
          leftIcon={{
            type: 'ionicons',
            name: 'calendar-outline',
            color: theme.colors.planned,
          }}
          leftIconColor={theme.colors.planned}
          name="Planned"
        />
        <MenuItem
          leftIcon={{
            type: 'ionicons',
            name: 'person-outline',
            color: theme.colors.assigned,
          }}
          leftIconColor={theme.colors.assigned}
          name="Assigned to me"
        />
        <MenuItem
          leftIcon={{ tyle: 'ionicons', name: 'home-outline', color: theme.colors.task }}
          name="Tasks"
        />
        <BreakLine></BreakLine>
        <BreakSpace></BreakSpace>
        <MenuItem
          leftIcon={{ type: 'ionicons', name: 'hand-left', color: theme.colors.hand }}
          name="Getting Started"
        />
        {folderList.map((folder) => {
          return renderFolderItem(folder);
        })}
      </TopItemsContainer>

      <MenuItem
        leftIcon={{
          type: 'ionicons',
          name: 'add',
          color: theme.colors.icon,
        }}
        rightIcon={{ type: 'foundation', name: 'folder-add', color: theme.colors.icon }}
        nameStyle="grey"
        name="New List"
      />
    </MenuScreenContainer>
  );
};

export default MenuScreen;
