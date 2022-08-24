import { FC } from 'react'

import { SKILLS } from 'Assets/Texts'

import * as Styled from './Skills.style'

export const SkillsAtom: FC = () => {
  return (
    <div>
      <Styled.SkillsTitle>My current skillset:</Styled.SkillsTitle>

      <Styled.Skills>
        {SKILLS.map((skillItem) => (
          <div key={skillItem}>{skillItem}</div>
        ))}
      </Styled.Skills>
    </div>
  )
}
