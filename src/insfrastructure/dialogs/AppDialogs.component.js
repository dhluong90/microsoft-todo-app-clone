import React, { useEffect, useRef, useContext } from 'react';
import GroupActionDialog from '../../features/menu/components/GroupActionDialog.compoment';
import { AppDialogsContext } from './AppDialogs.context';

const AppDialogs = () => {
  const ref = useRef();
  const { showingDialogType, showDialog } = useContext(AppDialogsContext);

  useEffect(() => {
    console.log(showingDialogType);
    if (showingDialogType === 'actionGroupDialog') {
      console.log(ref.current);
      showDialog(null);
      ref.current?.present();
    } else ref.current?.close();
  }, [showingDialogType, showDialog]);
  return <GroupActionDialog ref={ref} />;
};

export default AppDialogs;
