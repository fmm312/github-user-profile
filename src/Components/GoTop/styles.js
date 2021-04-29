import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid currentColor;
  color: var(--color-scale-gray-0);
  border-radius: 5px;
  height: 30px;
  width: 30px;
  font-size: 28px;
  transition: all 300ms ease;
  position: absolute;
  right: 20px;

  &:hover {
    background-color: var(--color-scale-gray-9);
    color: #fff;
    cursor: pointer;
  }
`
