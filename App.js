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
import AppDialogs from './src/insfrastructure/dialogs/AppDialogs.component';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppDialogsContextProvider } from './src/insfrastructure/dialogs/AppDialogs.context';
import { TaskListsContextProvider } from './src/services/lists/task-lists.context';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line
    NotoSans_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  Amplify.configure(awsconfig);

  return (
    <SafeAreaProvider>
      <AppDialogsContextProvider>
        <StyledProvider theme={DefaultTheme}>
          <PaperProvider theme={DefaultTheme}>
            <TaskListsContextProvider>
              <NavigationContainer theme={DefaultTheme}>
                <Stack.Navigator
                  screenOptions={{ header: (props) => <CustomNavigationBar {...props} /> }}
                >
                  <Stack.Screen name="Menu" component={MenuScreen} />
                  <Stack.Screen name="Myday" component={MyDayScreen} />
                </Stack.Navigator>
              </NavigationContainer>
              <AppDialogs />
            </TaskListsContextProvider>
          </PaperProvider>
        </StyledProvider>
      </AppDialogsContextProvider>
    </SafeAreaProvider>
  );
}
