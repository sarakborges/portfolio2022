import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  flex-flow: column;

  min-height: 100vh;
`

export const Wrapper = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  flex-flow: column;
  gap: 48px;

  min-height: calc(100vh - 48px);
  max-width: 1170px;
  padding: 48px;
`
