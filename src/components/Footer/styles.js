import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 12px;
  color: var(--color-scale-gray-8);
  padding: 20px;
  background-color: var(--color-scale-gray-0);
  /* letter-spacing: .5px; */

  @media(max-width: 520px) {
    text-align: center;
  }
`;
