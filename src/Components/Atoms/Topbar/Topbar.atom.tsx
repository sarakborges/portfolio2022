import { FC } from 'react'

import { TOPBAR_ITEMS } from 'Assets/Texts'

import * as Styled from './Topbar.style'

export const TopbarAtom: FC = () => {
  return (
    <Styled.Topbar>
      {TOPBAR_ITEMS.map((topbarItem) => (
        <a href={`#${topbarItem.link}`} key={topbarItem.link}>
          {topbarItem.text}
        </a>
      ))}
    </Styled.Topbar>
  )
}
