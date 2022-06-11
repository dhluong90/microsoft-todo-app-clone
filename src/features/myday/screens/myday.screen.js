import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
const MyDayScreen = ({ navigation }) => {
  return (
    <View>
      <Text>My Day</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('Menu');
        }}
      >
        Go to Menu
      </Button>
    </View>
  );
};

export default MyDayScreen;
