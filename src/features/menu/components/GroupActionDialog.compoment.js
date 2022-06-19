import React from 'react';
import BottomSheetDialog from '../../../components/BottomSheet/BottomSheetDialog.component';
import styled from 'styled-components';
import BottomSheetHeader from '../../../components/BottomSheet/BottomSheetHeader.component';
import { MenuItem } from './MenuItem.component';
import { useTheme } from 'react-native-paper';
import { Spacer } from '../../../components/spacer/spacer.component';

const ContentContainer = styled.View`
  justifiy-content: flex-start;
  flex: 1;
`;

const GroupActionDialog = React.forwardRef((props, ref) => {
  const theme = useTheme();

  const onDone = () => {
    ref.current?.close();
    props.onDone && props.onDone();
  };

  const renderDialogTitle = () => <BottomSheetHeader onDone={onDone} />;
  const renderDialogContent = () => (
    <ContentContainer>
      <Spacer position="bottom" size="large" />
      <MenuItem
        leftIcon={{ type: 'feather', name: 'list', color: '#fff' }}
        name="Add/Remove Lists"
      />
      <Spacer position="bottom" size="large" />
      <MenuItem leftIcon={{ type: 'feather', name: 'edit', color: '#fff' }} name="Rename Group" />
      <Spacer position="bottom" size="large" />
      <MenuItem
        leftIcon={{ type: 'feather', name: 'trash-2', color: theme.colors.alert }}
        name="Add/Remove Lists"
        nameStyle="alert"
      />
      <Spacer position="bottom" size="large" />
    </ContentContainer>
  );
  return (
    <BottomSheetDialog
      ref={ref}
      renderTitle={renderDialogTitle}
      renderContent={renderDialogContent}
    />
  );
});

GroupActionDialog.displayName = 'Group Action Dialog';
export default GroupActionDialog;
