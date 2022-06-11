import styled from 'styled-components/native';
import { StatusBar, SafeAreaView } from 'react-native';

const SafeArea = styled(SafeAreaView)`
  margin-top: ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;
export default SafeArea;
