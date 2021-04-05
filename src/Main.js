import React, {useState, useEffect} from "react";
import Welcome from './component/Welcome';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './theme/GlobalStyles'
import WebFont from 'webfontloader';
import {useTheme} from './theme/useTheme';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import BackgroundConsulRegister from './util/service-data';

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
      <BackgroundConsulRegister/>
        <GlobalStyles/>
          <Grid container justify="center" alignItems="stretch" spacing={5} style={{fontFamily : selectedTheme.font}}>
            <Grid item xs={12} className="title"><Box textAlign="center">Cards Against Humanity</Box></Grid>
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