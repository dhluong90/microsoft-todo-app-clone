import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './src/features/menu/screens/menu.screen';
import MyDayScreen from './src/features/myday/screens/myday.screen';
// eslint-disable-next-line
import { useFonts, NotoSans_700Bold } from '@expo-google-fonts/noto-sans';
import { CustomNavigationBar } from './src/components/navigation/CustomNavigationBar.component';
import { Provider as PaperProvider } from 'react-native-paper';
import DefaultTheme from './src/insfrastructure/theme/';
import { ThemeProvider as StyledProvider } from 'styled-components';
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line
    NotoSans_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <StyledProvider theme={DefaultTheme}>
      <PaperProvider theme={DefaultTheme}>
        <NavigationContainer theme={DefaultTheme}>
          <Stack.Navigator
            screenOptions={{ header: (props) => <CustomNavigationBar {...props} /> }}
          >
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Myday" component={MyDayScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StyledProvider>
  );
}
