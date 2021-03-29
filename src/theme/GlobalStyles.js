import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({theme}) => theme.colors.body};
        color: ${({theme}) => theme.colors.text};
        font-family: ${({theme}) => theme.font};
        font-weight: ${({theme}) => theme.fontWeight};
        word-wrap: ${({theme}) => theme.wordWrap};
    }

    .title {
        color: ${({theme}) => theme.colors.text};
        font-size: ${({theme}) => theme.fontSize.title};
    }

    .card {
        margin-left: ${({theme}) => theme.margin.card.left};
        margin-bottom: ${({theme}) => theme.margin.card.bottom};
        margin-right: ${({theme}) => theme.margin.card.right};
        margin-top: ${({theme}) => theme.margin.card.top};
        font-size: ${({theme}) => theme.fontSize.card};
        padding-left: ${({theme}) => theme.padding.card.left};
        padding-bottom: ${({theme}) => theme.padding.card.bottom};
        padding-right: ${({theme}) => theme.padding.card.right};
        padding-top: ${({theme}) => theme.padding.card.top};
        width: ${({theme}) => theme.size.card.width};
        height: ${({theme}) => theme.size.card.height};
        border-style: ${({theme}) => theme.border.style};
        border-radius: ${({theme}) => theme.border.radius};
        border-width: ${({theme}) => theme.border.width};
    }

    .prompt {
        background: ${({theme}) => theme.colors.prompt.background};
        color: ${({theme}) => theme.colors.prompt.text};
        border-color: ${({theme}) => theme.colors.prompt.border};
    }

    .response {
        background: ${({theme}) => theme.colors.response.background};
        color: ${({theme}) => theme.colors.response.text};
        border-color: ${({theme}) => theme.colors.response.border};
    }

    .error {
        color: #ff1744;
    }
`;    
