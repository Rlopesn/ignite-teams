import { ThemeProvider } from "styled-components";
import { Groups } from "@screens/Groups";
import { StatusBar, ActivityIndicator } from "react-native";
import theme from "@theme/index";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function App() {

  const [fonstLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fonstLoaded ? <Groups /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}

