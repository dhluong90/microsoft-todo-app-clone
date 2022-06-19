import React, { useMemo } from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

const BottomSheetDialogCustomBackground = ({ style, animatedIndex }) => {
  // #region styles
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    // @ts-ignore
    backgroundColor: '#212424',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  }));
  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style, containerAnimatedStyle]
  );
  // #endregion

  // render
  return <Animated.View pointerEvents="none" style={containerStyle} />;
};

export default BottomSheetDialogCustomBackground;
