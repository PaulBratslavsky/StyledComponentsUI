import styled from 'styled-components';

const UIMainContent = styled.header`
  height: 100%;
  width: 100%;
  display: grid;
  transition: all 2s ease-in-out;
  grid-template-columns: ${ ({menuOpen}) => menuOpen ? '250px' : '0'} 1fr;
`;

export default UIMainContent;
