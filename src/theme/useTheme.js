import {useEffect, useState} from 'react';
import {setToLS, getFromLS} from '../util/storage';
import _ from 'lodash';

export const useTheme = () => {
    const themes = getFromLS('all-themes');
    const [theme, setTheme] = useState(themes.data.cardsagainsthumanity);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = mode => {
        setToLS('theme', mode);
        setTheme(mode);
    }

    const getFonts = () => {
        const allFonts = _.values(_.mapValues(themes.data, 'font'));
        return allFonts;
    }

    useEffect(() => {
        const localTheme = getFromLS('theme');
        localTheme ? setTheme(localTheme) : setTheme(themes.data.cardsagainsthumanity);
        setThemeLoaded(true);
    }, []);

    return {theme, themeLoaded, setMode, getFonts};
}