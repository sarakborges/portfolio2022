import styled, { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

export const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&display=swap');

  ${reset}

  :root{
    --white: #fff;

    --dark: #1a2029;
  }
  
  * {
    box-sizing: border-box;
    font-family: inherit;
  }

  body {
    background-color: var(--dark);

    color: var(--white);
    font-family: Montserrat, sans-serif;
  }
`

export const Wrapper = styled.div``
