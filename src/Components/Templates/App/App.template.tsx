import { FC } from 'react'

import { TopbarAtom } from 'Components/Atoms'
import { ContactSection } from 'Components/Molecules'

import * as Styled from './App.style'

export const AppTemplate: FC = () => {
  const pageSections = [
    {
      title: 'Contact',
      component: <ContactSection />,
    },
  ]

  return (
    <Styled.Container>
      <TopbarAtom />

      {pageSections.map((section) => (
        <Styled.Wrapper key={section.title}>{section.component}</Styled.Wrapper>
      ))}
    </Styled.Container>
  )
}
