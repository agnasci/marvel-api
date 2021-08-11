/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import userEvent from '@testing-library/user-event'
import {
  fireEvent,
  screen,
  waitFor,
  waitForElement,
} from '@testing-library/react'
import {
  response as mockData,
  initialStateHeader,
  initialStateWithExpenses,
} from './mockData'
import Home from '../pages/Home'
import App from '../App'

import { renderWithRouterAndStore } from './testConfig'

const apiResponse = Promise.resolve({
  json: () => Promise.resolve(mockData),
  ok: true,
})

const mockedExchange = jest
  .spyOn(global, 'fetch')
  .mockImplementation(() => apiResponse)

afterEach(() => jest.clearAllMocks())

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
