import React from 'react';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { MenuItemContainer, CatalogContainer } from './MenuItem.styled';
import Icon from '../../../components/utils/icon.component';
import { Pressable } from 'react-native';

export const MenuItem = ({
  leftIcon,
  name,
  nameStyle,
  numberOfTask,
  rightIcon,
  onPress,
  menuOptionPress,
}) => {
  return (
    <MenuItemContainer onPress={onPress && onPress}>
      <Spacer position="left" size="medium">
        <Icon type={leftIcon.type} name={leftIcon.name} color={leftIcon.color} />
      </Spacer>
      <CatalogContainer>
        <Spacer position="left" size="large">
          <Text type={nameStyle ? nameStyle : 'regular'}>{name}</Text>
        </Spacer>
      </CatalogContainer>
      {menuOptionPress && (
        <Spacer position="right" size="large">
          <Pressable onPress={menuOptionPress}>
            <Icon type="ionicons" name="ios-ellipsis-horizontal-sharp" color={rightIcon.color} />
          </Pressable>
        </Spacer>
      )}
      <Spacer position="right" size="large">
        {numberOfTask && <Text>{numberOfTask}</Text>}
        {rightIcon && <Icon type={rightIcon.type} name={rightIcon.name} color={rightIcon.color} />}
      </Spacer>
    </MenuItemContainer>
  );
};
