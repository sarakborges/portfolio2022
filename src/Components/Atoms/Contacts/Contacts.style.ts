import styled from 'styled-components'

export const Contacts = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  gap: 24px;

  > span {
    font-size: 24px;
  }
`

export const ContactsList = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  gap: 16px;

  > a {
    display: flex;
    place-content: center;
    place-items: center;

    width: 48px;
    aspect-ratio: 1;

    background-color: var(--light);
    border-radius: 100%;

    transition: background-color 0.3s;

    > svg {
      width: 24px;
      fill: var(--highlight);

      transition: fill 0.3s;
    }

    &:hover {
      background-color: var(--highlight);

      > svg {
        fill: var(--light);
      }
    }
  }
`
