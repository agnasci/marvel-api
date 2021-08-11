import React from 'react'

import { render, waitForElement, fireEvent } from '@testing-library/react'

import NavBar from './NavBar'

describe('Testes gerais para a aplicação.', () => {
  it('Deve pesquisar na API por um herói quando o input for enviado.', async () => {
    //Renderizar componente:

    const { getByTestId } = render(<NavBar />)

    // Buscar o input:

    const searchInput = await waitForElement(() => getByTestId('search-input'))

    // Digitar no input:

    fireEvent.change(searchInput, { target: { value: 'Spider' } })
    expect(searchInput.value).toEqual('Spider')
    fireEvent.keyPress(searchInput, { key: 'Enter', code: 'Enter' })

    // Enviar a busca,
    // Verificar se a tarefa foi cumprida.
  })
})
