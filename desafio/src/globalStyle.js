import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: muli, sans-serif;
}

body{
  background-color: #F6F4F6;
  font-family: muli, sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
}

:root {

/* Colors: */
--unnamed-color-000000: #000000;
--unnamed-color-a02724: #A02724;
--unnamed-color-b55b52: #B55B52;
--unnamed-color-263238: #263238;
--unnamed-color-c64049: #C64049;
--unnamed-color-e6e6e6: #E6E6E6;
--unnamed-color-e0e0e0: #E0E0E0;
--unnamed-color-f5f5f5: #F5F5F5;
--unnamed-color-f0f0f0: #F0F0F0;
--unnamed-color-ebebeb: #EBEBEB;
--unnamed-color-6c63ff: #6C63FF;
---cor-stroke: #EDD8F3;
---cor-bg: #F9F0FC;
---cor-branco: #FFFFFF;
---cor-aviso: #FFC400;
---cor-erro: #DB2525;
---cor-sucesso: #51C421;
---cor-texto: #454545;
---cor-destaque: #E76316;
---cor-primaria: #5F1478;
---cor-secundaria: #AE276F;
}

`

export default globalStyle
