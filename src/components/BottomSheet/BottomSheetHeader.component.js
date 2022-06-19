import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-native-paper';
import { Text } from '../typography/text.component';

const HeaderContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

const TitleContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;
const BottomSheetHeader = ({ onDone }) => (
  <HeaderContainer>
    <Button></Button>
    <TitleContainer>
      <Text variant="title">Group Options</Text>
    </TitleContainer>
    <Button uppercase={false}>
      <Text type="task" onPress={onDone}>
        Done
      </Text>
    </Button>
  </HeaderContainer>
);

export default BottomSheetHeader;
