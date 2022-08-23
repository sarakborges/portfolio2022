import { FC } from 'react'

import { SITE_SECTIONS } from 'Assets/Texts'

import * as Styled from './Topbar.style'

export const TopbarAtom: FC = () => {
  return (
    <Styled.Topbar>
      {SITE_SECTIONS.map((topbarItem) => (
        <a href={`#${topbarItem.link}`} key={topbarItem.link}>
          {topbarItem.text}
        </a>
      ))}
    </Styled.Topbar>
  )
}
