import { FC } from 'react'

import { TitleAtom, ContactsAtom, SkillsAtom } from 'Components/Atoms'

export const HomeSection: FC = () => {
  return (
    <>
      <TitleAtom />
      <ContactsAtom />
      <SkillsAtom />
    </>
  )
}
