import React from 'react';
import Styled from 'styled-components';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';

const EmptyGroupContainer = Styled.View`
  borderLeftWidth: 1px;
  justify-content: center;
  align-items: center;
`;

const EmptyGroup = () => {
  return (
    <EmptyGroupContainer>
      <Spacer position="bottom" size="large"></Spacer>
      <Text type="grey">Drag Here to Add Lists</Text>
      <Spacer position="bottom" size="large"></Spacer>
    </EmptyGroupContainer>
  );
};

export default EmptyGroup;
