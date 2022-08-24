import styled from 'styled-components'

export const SkillsTitle = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;

  font-size: 24px;
  text-align: center;
`

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  place-content: center;
  gap: 16px;

  > div {
    padding: 12px 16px;

    border: 2px solid var(--light);
    border-radius: 24px;
    cursor: default;

    font-weight: 500;
    white-space: nowrap;

    transition: color 0.3s, border-color 0.3s;

    &:hover {
      color: var(--highlight);

      border-color: var(--highlight);
    }
  }
`
