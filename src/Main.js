import React, {useState, useEffect} from "react";
import Welcome from './component/Welcome';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './theme/GlobalStyles'
import WebFont from 'webfontloader';
import {useTheme} from './theme/useTheme';
import Grid from '@material-ui/core/Grid';

function Main() {
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={selectedTheme}>
        <GlobalStyles/>
          <Grid container justify="center" alignItems="center" spacing={5} style={{fontFamily : selectedTheme.font}}>
            <Grid item className="title">Cards Against Humanity</Grid>
            <Grid item>
              <Welcome/>
            </Grid>
          </Grid>
      </ThemeProvider>
    }
    </>
  );
}

export default Main;