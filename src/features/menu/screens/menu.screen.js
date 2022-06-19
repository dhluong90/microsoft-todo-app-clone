import React, { useContext, useCallback, useMemo } from 'react';
import { MenuItem } from '../components/MenuItem.component';
import { useTheme } from 'react-native-paper';
import MenuGroup from '../components/GroupItem.component';
import { MenuScreenContainer, TopItemsContainer, BreakLine, BreakSpace } from './menu.styled';
import { AppDialogsContext } from '../../../insfrastructure/dialogs/AppDialogs.context';
import { TaskListsContext } from '../../../services/lists/task-lists.context';
import List from '../components/List.component';

const MenuScreen = () => {
  const theme = useTheme();
  const { showDialog } = useContext(AppDialogsContext);
  const { taskLists, addTasklist, groups } = useContext(TaskListsContext);

  const renderFolderItem = useCallback(
    (folder) => {
      const folderTaskLists = taskLists.filter((i) => i.group === folder.id);
      return (
        <MenuGroup
          group={folder}
          taskLists={folderTaskLists}
          optionPress={() => {
            showDialog('actionGroupDialog');
          }}
          key={folder.id}
        />
      );
    },
    [taskLists, groups]
  );

  const nonGroupList = useMemo(() => {
    return taskLists.filter((i) => !i.group || i.group == null);
  }, [taskLists]);

  const onAddNewList = () => {
    const taskList = { name: 'Untiled list', group: null };
    addTasklist(taskList);
  };

  return (
    <MenuScreenContainer edges="bottom">
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
        {groups &&
          groups.length != 0 &&
          groups.map((folder) => {
            return renderFolderItem(folder);
          })}
        {nonGroupList &&
          nonGroupList.map((item, index) => {
            return <List list={item} key={index} />;
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
        onPress={onAddNewList}
      />
    </MenuScreenContainer>
  );
};

export default MenuScreen;
