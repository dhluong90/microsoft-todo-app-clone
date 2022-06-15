import React, { useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  useBottomSheetDynamicSnapPoints,
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

const GroupActionDialog = React.forwardRef((props, ref) => {
  // variables
  const snapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);

  const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } =
    useBottomSheetDynamicSnapPoints(snapPoints);

  const handleSheetChanges = useCallback((index, number) => {
    console.log('handleSheetChanges', index);
    ref.current?.expand();
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
      >
        <BottomSheetView onLayout={handleContentLayout}>
          <Text>Could this sheet modal resize to its content height ?</Text>
          <View>
            <Text style={styles.emoji}>😍</Text>
          </View>
          <Button title="Yes" />
          <Button title="Maybe" />
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

GroupActionDialog.displayName = 'Group Action Dialog';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default GroupActionDialog;
