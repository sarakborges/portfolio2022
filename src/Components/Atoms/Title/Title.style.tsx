import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  gap: 48px;

  > h1 {
    position: relative;

    padding: 12px 24px;

    font-size: 32px;
    line-height: 1.6;
    white-space: pre;

    background-color: var(--highlight);
    border-radius: 24px;

    > span {
      font-weight: 500;
    }

    &:before {
      content: '';

      position: absolute;
      top: calc(50% - 16px);
      left: -32px;
      z-index: 1;

      border: 16px solid transparent;
      border-right-color: var(--highlight);
    }
  }

  > img {
    max-width: 160px;
    aspect-ratio: 1;

    border-radius: 100%;
    background-color: var(--light);
  }
`
