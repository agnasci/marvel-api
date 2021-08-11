/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { screen } from '@testing-library/react'

import Home from '../pages/Home'
import App from '../App'

import { renderWithRouterAndStore } from './testConfig'

describe('1 - [PÁGINA INICIAL] Á Pagina inicial deve ser renderizada:', () => {
  test("A rota para esta página deve ser '/'", () => {
    const { history } = renderWithRouterAndStore(<App />)
    expect(history.location.pathname).toBe('/')
  })
  test('O componente deve se chamar Home e estar localizado na pasta "src/pages/Home"', () => {
    const { container } = renderWithRouterAndStore(<Home />, '/', {})
    expect(container).toBeDefined()
  })
  test('Crie um local para que o usuário insira o nome do personagem', () => {
    renderWithRouterAndStore(<Home />, '/')
    const inputSearch = screen.getByTestId('search-input')
    expect(inputSearch).toBeInTheDocument()
  })
})
