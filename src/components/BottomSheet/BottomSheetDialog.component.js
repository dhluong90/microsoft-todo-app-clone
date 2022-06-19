import React, { useCallback, useMemo } from 'react';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  useBottomSheetDynamicSnapPoints,
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import BottomSheetDialogCustomBackground from './BottomSheetDialogCustomBackground.component';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';

const BottomSheetDialog = React.forwardRef((props, ref) => {
  // variables
  const snapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const { bottom: safeAreaBottom } = useSafeAreaInsets();
  const theme = useTheme();

  const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } =
    useBottomSheetDynamicSnapPoints(snapPoints);

  const handleSheetChanges = useCallback((index, number) => {
    ref.current?.expand();
    props.handlechange && props.handleChange();
  }, []);

  const renderBackdrop = useCallback((props) => {
    return <BottomSheetBackdrop {...props} pressBehavior={'close'} disappearsOnIndex={-1} />;
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        backgroundComponent={BottomSheetDialogCustomBackground}
        handleIndicatorStyle={{ backgroundColor: theme.colors.icon }}
      >
        <BottomSheetView
          onLayout={handleContentLayout}
          style={{
            paddingBottom: safeAreaBottom | 6,
            paddingHorizontal: 3,
          }}
        >
          {props.renderTitle()}
          {props.renderContent()}
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

BottomSheetDialog.displayName = 'Bottom Sheet Dialog';

export default BottomSheetDialog;
