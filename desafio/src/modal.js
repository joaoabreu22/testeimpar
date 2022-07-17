import React from 'react'
import {
  ContainerModal,
  ContainerButtonModal,
  ButtonClose,
  ContainerItens,
  Button1,
  Button2
} from './styles'

const Modal = ({ onClose = () => {} }) => {
  return (
    <>
      <ContainerModal onClick={onClose}>
        <ContainerButtonModal>
          <ContainerItens onClick={onClose}>
            <h1>Criar Cards</h1>
            <p>DIGITE UM NOME PARA O CARD</p>
            <input placeholder="DIGITE UM NOME PARA O CARD"></input>
            <p>INCLUA UMA IMAGEM PARA APARECER NO CARD</p>
            <input placeholder="Nenhum arquivo selecionado"></input>
            <Button2>Escolher um arquivo</Button2>
            <Button1>Criar card</Button1>
          </ContainerItens>
          <ButtonClose onClick={onClose}></ButtonClose>
        </ContainerButtonModal>
      </ContainerModal>
    </>
  )
}

export default Modal
