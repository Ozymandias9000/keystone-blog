import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    html {
        --blue: #40aadd;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
        box-sizing: border-box;
    }

    body {
        font-family: radnika_next, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.5rem;
        line-height: 2
    }

    html,body {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: var(--blue)
    }
`

const Main = styled.div`
    padding: 0 2rem;
`

const Home: React.FC<{}> = () => (
    <>
        <GlobalStyles />
        <Main>
            hii fddfffdds
            <a href="">dsfsdf</a>
        </Main>
    </>
)

export default Home
