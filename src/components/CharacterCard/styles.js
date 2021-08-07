import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  height: 300px;
  width: 200px;
  border-radius: 8px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
  }
  `
export const NameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 2px solid var(--blue);

  span {
    color: var(--black);
    font-family: 'Inter', sans-serif;
    font-weight: 400;
`

export const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 255px;
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;

  img {
    height: 255px;
  }
`
