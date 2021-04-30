import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-scale-gray-8);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;

  @media(max-width: 520px) {
    text-align: center;
  }

  .icon {
    color: var(--color-scale-blue-5);
    font-size: 70px;
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    align-items: center;

    @media(max-width: 520px) {
      flex-direction: column;
    }
  }

  .error-message {
    color: red;
    text-align: center;
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 520px) {
      position: absolute;
      bottom: 40px;
    }

    .error-message-icon {
      font-size: 16px;
      margin-right: 6px; 
    }
  }
`;

export const Title = styled.h1`
  color: var(--color-scale-white);
  font-weight: 700;
  font-size: 34px;
`;

export const TextField = styled.input`
  background-color: var(--color-scale-gray-6);
  outline: none;
  border: none;
  height: 54px;
  padding: 12px;
  box-sizing: border-box;
  color: var(--color-scale-blue-2);
  font-size: 24px;
  margin: 30px 0px;
  font-weight: 400;
  width: 320px;
  margin-right: 20px;
  border-radius: 4px;

  @media(max-width: 520px) {
    text-align: center;
  }
`;

export const FindButton = styled.button`
   background-color: var(--color-scale-blue-5);
   color: var(--color-scale-white);
   border: none;
   padding: 12px 28px;
   font-size: 16px;
   border-radius: 4px;
   min-width: 120px;
   min-height: 54px;

   &:hover {
     filter: brightness(1.2);
   }

  .loader {
    border: 2px solid #f3f3f3;
    border-radius: 50%;
    border-top: 2px solid #3498db;
    width: 16px;
    height: 16px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    margin: 0 auto;

    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  }
  
`;