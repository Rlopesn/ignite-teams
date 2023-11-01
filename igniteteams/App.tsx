import { ThemeProvider } from "styled-components";
import { NewGroup } from "@screens/NewGroup";
import { StatusBar } from "react-native";
import theme from "@theme/index";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Loading } from "@components/loading";


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
      {fonstLoaded ? <NewGroup /> : <Loading /> }
    </ThemeProvider>
  );
}

