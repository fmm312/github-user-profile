import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 60px 60px 60px;
  text-align: center;

  @media(max-width: 520px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  color: var(--color-scale-gray-8);
`;

export const Filter = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .textfield {
    height: 42px;
    width: 250px;
    padding: 0px 10px;
    border-radius: 6px;
    border: 2px solid var(--color-scale-gray-6);
    transition: all 300ms ease;
    font-size: 14px;
    outline: none;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background-color: var(--color-scale-white);
  width: 32%;
  border-radius: 6px;
  height: 180px;
  border: 1px solid var(--color-scale-gray-0);
  text-align: left;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 300ms ease;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 20%) 0px 10px 30px -15px;

  @media(max-width: 520px) {
    width: 100%;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 3px -5px;
    border: 1px solid var(--color-scale-blue-4);
  }

  .card-header {
    h2 {
      font-size: 22px;
      font-weight: 500;
      color: var(--color-scale-gray-6);
    }

    p {
      margin-top: 10px;
      color: var(--color-scale-gray-5);
      font-size: 14px;
      line-height: 22px;
    }

    .card-icon {
      margin-right: 6px;
      position: relative;
      top: 4px;
    }
  }

  .card-footer {
    display: flex;
    align-items: center;

    p {
      margin-right: 15px;
      color: var(--color-scale-gray-5);
      font-size: 14px;

      .card-circle-color {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: red;
        margin-right: 6px;
        position: relative;
        top: 2px; 
      }

      .card-icon {
        margin-right: 6px;
        position: relative;
        top: 1px;
      }
    }

    p:first-child {
      display: inline-flex;
    }
  }
`;

export const ButtonFilter = styled.button`
  background-color: #fff;
  padding: 6px 10px;
  border-radius: 4px;
  width: 60px;
  font-weight: 600;
  border: 2px solid var(--color-scale-gray-5);
  margin-right: 10px;
  transition: all 300ms ease;

  &:hover {
    opacity: .9;
  }
`;

export const GoToRepoButton = styled.button`
  background-color: transparent;
  padding: 16px 25px;
  border-radius: 94px;
  font-weight: 600;
  border: none;
  margin-top: 40px;

  .linkExternal {
    font-size: 16px;
    position: relative;
    top: 3px;
    margin-left: 6px;
  }
`;