import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from './modal'
import Logo from './img/logo-teste.svg'
import FundoBusca from './img/fundo-busca.png'
import IconeTrash from './img/Icon-trash.svg'
import IconeEdit from './img/Icon-edit.svg'
import {
  Topo,
  Container,
  CardContainer,
  Card,
  ResultsSearch,
  ButtonContainer,
  SearchContainer,
  Button1
} from './styles'

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [pokemons, setPokemons] = useState([])
  const [images, setImages] = useState([])

  const [search, setSearch] = useState([])
  const [textSearch, setTextSearch] = useState('')
  const [imageSearch, setImageSearch] = useState(0)

  useEffect(() => {
    let result = []

    axios.get('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
      response.data.results.map(async function (pokemon) {
        await axios.get(pokemon.url).then(function (response2) {
          result.push(response2.data.sprites.back_default)
          setImages(result)
          setImageSearch(result)
        })
      })

      setPokemons(response.data.results)
      setSearch(response.data.results)
    })
  }, [])

  useEffect(() => {
    if (textSearch === '') {
      setSearch(pokemons)
    } else {
      let idImage = 0

      let result = pokemons.find((pokemon, index) => {
        if (pokemon.name.startsWith(textSearch)) {
          idImage = index
          return pokemon
        }

        return
      })

      if (result) {
        setSearch([result])
        setImageSearch(idImage)
      }
    }
  }, [textSearch])

  function clickHere() {
    alert('Essa função não foi implementada!!')
  }

  return (
    <>
      <div>
        <Topo>
          <img src={Logo} alt="Logo" />
        </Topo>
        <img src={FundoBusca} alt="Fundo-busca" />

        <SearchContainer>
          <input
            placeholder="Digite aqui sua busca..."
            onChange={e => setTextSearch(e.target.value)}
            value={textSearch}
          />
        </SearchContainer>

        <ResultsSearch>
          <h1>Resultado de busca</h1>
          <Button1 onClick={() => setIsModalVisible(true)}>Novo Card</Button1>
          {isModalVisible ? (
            <Modal onClose={() => setIsModalVisible(false)}></Modal>
          ) : null}
        </ResultsSearch>
      </div>
      {
        <Container>
          <CardContainer>
            {search.map(
              (pokemon, index) => (
                //==================================================================
                <Card key={index}>
                  <img src={images[textSearch ? imageSearch : index]} />
                  {pokemon.name}
                  <ButtonContainer>
                    <button onClick={clickHere}>
                      <img src={IconeTrash} alt="Icone-lixo" /> Excluir
                    </button>
                    <button onClick={clickHere}>
                      <img src={IconeEdit} alt="Icone-Editar" /> Editar
                    </button>
                  </ButtonContainer>
                </Card>
              )
              //==================================================================
            )}
          </CardContainer>
        </Container>
      }
    </>
  )
}

export default App
