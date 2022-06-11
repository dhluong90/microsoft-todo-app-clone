import React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import { View } from 'react-native';
import { Spacer } from '../../components/spacer/spacer.component';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from 'react-native-paper';
import { Text } from '../typography/text.component';

export const CustomNavigationBar = ({ navigation, back }) => {
  const user = {
    name: 'Luong Dinh',
  };
  const theme = useTheme();
  return (
    <Appbar.Header theme={theme} style={{ backgroundColor: theme.colors.background }}>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <Avatar.Text size={32} label="DH" />
          <Spacer position="left" size="large">
            <Text theme={theme}>{user.name}</Text>
          </Spacer>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <Spacer position="right" size="large">
              <Ionicons
                name="search-outline"
                size={24}
                color={theme.colors.icon}
                strokeWidth="10"
              />
            </Spacer>
          </View>
        </View>
      )}
      <StatusBar style="light" />
    </Appbar.Header>
  );
};
