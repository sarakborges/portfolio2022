import { FC } from 'react'

import { AppPage } from 'Components/Pages'

import * as Styled from 'Assets/Styles/GlobalStyle'

export const App: FC = () => {
  return (
    <>
      <Styled.Global />
      <AppPage />
    </>
  )
}
