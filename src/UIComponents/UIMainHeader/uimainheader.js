import styled from 'styled-components';

const UIMainHeader = styled.header`
  height: 100%;
  width: 100%;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2E2B3F;
  color: #f4f4f4;

  > div {
    display: flex;
    justify-content:center;
  }

  .logo {
    button {
      margin-right: 0.5rem;
      background: none;
      border: none;

      svg {
        color: #f4f4f4;
        font-size: 1.8rem;
      }
    }

  }

  .menu {

  }

`;

export default UIMainHeader;
