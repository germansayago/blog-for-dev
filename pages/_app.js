import { SessionProvider } from "next-auth/react";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import "../styles/globals.css";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {}, // optional
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {}, // optional
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const darkMode = useDarkMode(false);
  console.log(session);
  return (
    <SessionProvider session={session}>
      <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
