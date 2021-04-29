import styled from 'styled-components';

export const Container = styled.div`
  padding: 140px 60px 80px 60px;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
`;

export const ChartContainer = styled.div`
  padding: 20px;
`;

export const Block = styled.div`
  width: 33%;
  margin-right: 2%;
  background-color: var(--color-scale-white);
  border: 1px solid var(--color-scale-gray-0);
  height: 400px;
  border-radius: 6px;
  text-align: left;
  padding: 20px;
  color: var(--color-scale-gray-8);
  box-shadow: rgb(0 0 0 / 20%) 0px 10px 30px -15px;
`;

export const Divider = styled.div`
  height: 60px;
`;
