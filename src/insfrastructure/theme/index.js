import { DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { space } from './spacings';
import { sizes } from './sizes';
import { fontSizes, fontWeights } from './fonts';
const DefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    background: 'black',
    surface: 'black',
    text: 'white',
    icon: '#909090',
    iconSecondary: '#404040',
    important: '#E6BAC6',
    planned: '#A6D7D2',
    assigned: '#A6D7D2',
    task: '#7B88D7',
    hand: '#F4D368',
  },
  fonts: {
    ...PaperDefaultTheme.fonts,
    regular: 'NotoSans_700Bold',
    medium: 'NotoSans_700Bold',
  },
  sizes: sizes,
  space: space,
  fontWeights: fontWeights,
  fontSizes: fontSizes,
};

export default DefaultTheme;
