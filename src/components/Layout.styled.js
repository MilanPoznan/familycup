import styled from 'styled-components'

export const GlobalWrapper = styled.div`
  padding: 60px 0 0;
  /* max-width: 880px; */
  margin: 0 auto;
  /* font-family: 'Gotham', Arial, Helvetica, sans-serif; */
  p {
    font-size: 14px;
  }
  @media (min-width: 1200px) {
  padding: 0;

  }
`

export const HomeWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-flow: column;
`

