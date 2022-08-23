import { FC } from 'react'

import { SITE_SECTIONS } from 'Assets/Texts'

import { TopbarAtom } from 'Components/Atoms'

import * as Styled from './App.style'

export const AppTemplate: FC = () => {
  return (
    <Styled.Container>
      <TopbarAtom />

      {SITE_SECTIONS.map((section) =>
        section.component ? (
          <Styled.Wrapper key={section.text} id={section.text}>
            {section.component}
          </Styled.Wrapper>
        ) : (
          false
        )
      )}
    </Styled.Container>
  )
}
