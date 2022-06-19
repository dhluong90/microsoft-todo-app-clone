import React, { useState } from 'react';

export const AppDialogsContext = React.createContext();

export const AppDialogsContextProvider = ({ children }) => {
  const [showingDialogType, setShowingDialogType] = useState(null);

  const onShowDialogType = (dialogType) => {
    setShowingDialogType(dialogType);
  };

  return (
    <AppDialogsContext.Provider
      value={{
        showingDialogType,
        showDialog: onShowDialogType,
      }}
    >
      {children}
    </AppDialogsContext.Provider>
  );
};
