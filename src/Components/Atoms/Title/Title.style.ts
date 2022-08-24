import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  gap: 24px;

  > h1 {
    font-size: 32px;
    line-height: 1.6;
    white-space: pre;

    > span {
      font-weight: 500;
      color: var(--highlight);
    }
  }

  > img {
    max-width: 160px;
    aspect-ratio: 1;

    border-radius: 100%;
  }
`
