import styled from 'styled-components';
import SafeArea from '../../../components/utils/safe-area-view.component';

export const MenuScreenContainer = styled(SafeArea)`
  flex: ${1};
`;

export const TopItemsContainer = styled.ScrollView`
  flex: auto;
`;

export const BreakLine = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.icon}
  flex-direaction: row;
  flex: 1;
  height: 16px;
  margin-left: ${(props) => props.theme.space[2]}
  margin-right: ${(props) => props.theme.space[2]}
`;

export const BreakSpace = styled.View`
  flex-direaction: row;
  flex: 1;
  height: 16px;
  margin-left: ${(props) => props.theme.space[2]}
  margin-right: ${(props) => props.theme.space[2]}
`;
