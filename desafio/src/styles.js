import styled from 'styled-components'

export const Topo = styled.header`
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 64px;
  background: transparent
    linear-gradient(
      272deg,
      var(---cor-secundaria) 0%,
      var(---cor-primaria) 100%
    )
    0% 0% no-repeat padding-box;
  background: transparent linear-gradient(272deg, #ae276f 0%, #5f1478 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;

  img {
    padding-top: 14px;
    padding-left: 24px;
    width: 192px;
  }
`

export const SearchContainer = styled.div`
  input {
    position: absolute;
    top: 147px;
    left: 168px;
    width: 1046px;
    height: 75px;
    /* UI Properties */
    background: var(---cor-branco) 0% 0% no-repeat padding-box;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 8px;
    border: none;
    opacity: 1;
  }
`

export const ResultsSearch = styled.div`
  margin-top: 30px;

  h1 {
    display: inline;
    top: 301px;
    padding-left: 168px;
    /* UI Properties */
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-32) /
      var(--unnamed-line-spacing-40) var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(---cor-primaria);
    text-align: left;
    font: normal normal normal 32px/40px Muli;
    letter-spacing: 0px;
    color: #5f1478;
    opacity: 1;
  }
`
export const Button1 = styled.button`
  display: inline;
  margin-left: 400px;
  position: static;
  margin-right: 226px;
  width: 173px;
  height: 48px;
  /* UI Properties */
  color: var(---cor-branco);
  text-align: center;
  font: normal normal bold 18px/23px Muli;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  background: var(---cor-destaque) 0% 0% no-repeat padding-box;
  background: #e76316 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #92207242;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  opacity: 1;
`

export const Container = styled.div`
  display: flex;
  position: absolute;
  padding-top: 20px;
  justify-content: center;
  align-items: center;

  width: 100%;
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  max-width: 1056px;

  background-color: #f2f2f2;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  width: 234px;
  height: 267px;

  background: var(---cor-branco) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #e5e5e5;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  opacity: 1;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin-top: 100px;

  width: 100%;
  background: var(---cor-branco) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px #0000000f;
  border-radius: 0px 0px 8px 8px;
  opacity: 1;

  button {
    display: flex;
    justify-content: space-around;
    top: 614px;
    left: 220px;
    width: 99px;
    height: 19px;
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) 15px/19px
      var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-263238);
    text-align: center;
    font: normal normal normal 15px/19px Muli;
    letter-spacing: 0px;
    color: #263238;
    opacity: 0.52;
  }
`

export const ContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #f6f4f6cc;
  display: flex;
  justify-content: right;
  align-items: center;
`

export const ContainerButtonModal = styled.div`
  background-color: #fff;
  top: -2px;
  left: 798px;
  width: 642px;
  height: 767px;
  background: var(---cor-branco) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
`

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 100vh;
  cursor: pointer;
`

export const ContainerItens = styled.div`
  padding-top: 40px;
  margin-top: 100px;

  h1 {
    margin-right: 50px;
    top: 45px;
    left: 894px;
    width: 152px;
    height: 40px;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(---cor-primaria);
    text-align: left;
    font: normal;
  }
  p {
    margin-top: 50px;
    margin-left: 10px;
    left: 833px;
    width: 100%;
    height: 18px;
    /* UI Properties */
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) 14px / var(--unnamed-line-spacing-18)
      var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(---cor-texto);
    text-align: left;
    font: normal normal bold 14px/18px Muli;
    letter-spacing: 0px;
    color: #454545;
    text-transform: uppercase;
    opacity: 1;
  }

  input {
    top: 191px;
    left: 833px;
    margin-left: 10px;
    width: 573px;
    height: 60px;
    background: var(---cor-branco) 0% 0% no-repeat padding-box;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #b9b9b9;
    border-radius: 8px;
    opacity: 1;
  }
`
export const Button2 = styled.button`
  margin-left: 350px;
  margin-bottom: 50px;
  top: 338px;
  left: 1174px;
  width: 224px;
  height: 48px;
  font: normal normal bold 18px/23px Muli;
  letter-spacing: 0px;
  color: #e76316;
  opacity: 1;
  background: var(---cor-branco) 0% 0% no-repeat padding-box;
  border: 1px solid var(---cor-destaque);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px;
`
