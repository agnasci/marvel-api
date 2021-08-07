import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--blue);
  height: 70px;
  width: 100vw;
  }

  `

export const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 50%;

  img {
    height: 40px;
    border: 1px solid var(--white);
  }
  
  input {
    padding: 10px;
    background-color: var(--white);
    color: var(--black);
    border: none;
    border-radius: 8px;
    font: 14px 'Inter', sans-serif;
    width: 250px;

    &:focus {
      outline: none;
    }
  `
