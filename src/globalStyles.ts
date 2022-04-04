import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    background-color:#282828;
    .App {
      display:flex;
      @media (max-width:500px) {
        flex-direction:column;
        gap:30px;
      }
    }
  }
`
export default GlobalStyle;
