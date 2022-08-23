import styled from 'styled-components'

export const Topbar = styled.nav`
  display: flex;
  place-content: flex-end;
  place-items: center;

  position: sticky;
  left: 0;
  top: 0;
  z-index: 99;

  width: 100%;
  padding: 0 24px;

  background-color: var(--darker);

  > a {
    padding: 16px 24px;

    color: inherit;
    text-decoration: none;

    transition: color 0.3s;

    &:hover {
      color: var(--highlight);
    }
  }
`
