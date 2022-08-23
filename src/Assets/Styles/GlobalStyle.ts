import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

export const Global = createGlobalStyle`
  ${reset}

  :root{
    --highlight: hsl(260, 35%, 50%);
    --light: hsl(260, 20%, 85%);
    --dark: hsl(260, 30%, 15%);
    --darker: hsl(260, 30%, 12%);
  }
  
  * {
    box-sizing: border-box;
    font-family: inherit;
    scrollbar-width: thin;
  }

  body {
    background-color: var(--dark);

    color: var(--light);
    font-weight: 300;
    font-family: Montserrat, sans-serif;
  }
`
