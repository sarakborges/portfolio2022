import { FC } from 'react'

import { SITE_TITLE } from 'Assets/Texts'
import SaraAvatar from 'Assets/Images/avatar.png'

import * as Styled from './Title.style'

export const TitleAtom: FC = () => {
  return (
    <Styled.Title>
      <img src={SaraAvatar} alt="Sara's Avatar" />

      <h1 dangerouslySetInnerHTML={{ __html: SITE_TITLE }} />
    </Styled.Title>
  )
}
