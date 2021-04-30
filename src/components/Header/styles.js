import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  height: 65vh;
  background-color: var(--color-scale-gray-8);
  padding-top: 130px;

  @media(max-width: 520px) {
    height: 90vh;
  }

  .go-back-icon{
    position: absolute;
    top: 18px;
    left: 18px;
    color: var(--color-scale-gray-0);
    font-size: 30px;
    background: var(--color-scale-gray-6);
    border-radius: 50%;
    padding: 2px;
    cursor: pointer;
    transition: all 300ms ease;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export const Avatar = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-scale-gray-0);
  border-radius: 50%;
  border: 8px solid var(--color-scale-blue-5);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  overflow: hidden;

  @media(max-width: 520px) {
    margin: 0 auto;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; 

  .header {
    display: flex;
    margin-bottom: 50px;

    @media(max-width: 520px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .header-card {
    margin-left: 30px;

    @media(max-width: 520px) {
      margin-left: 0px;
      margin-top: 10px;
    }

    > h2 {
      font-size: 40px;
      font-weight: 500;
      color: var(--color-scale-gray-0);
      margin-bottom: 4px;
    }

    > span {
      > a {
        color: var(--color-scale-blue-4);
        font-weight: 500;
        font-size: 22px;
        display: block;
        margin-bottom: 20px;
        text-decoration: none;
        letter-spacing: .3px;
      }
    }

    > p {
      max-width: 280px;
      color: var(--color-scale-gray-3);
      font-size: 16px;
      line-height: 22px;

      @media(max-width: 520px) {
        max-width: 80%;
        margin: 0 auto;
      }
    }
  }

  .infos-card {
    display: flex;

    > span {
        font-weight: 400;
        font-size: 16px;
        margin-right: 25px;
        color: var(--color-scale-gray-0);
        padding: 0px 14px 0px 0px;
        text-align: center;
        box-sizing: border-box;
        border-right: 2px solid var(--color-scale-gray-0);
        letter-spacing: .4px;

        @media(max-width: 520px) {
          display: none;
        }

        .infos-card-icon {
          margin-right: 8px;
        }
      }
    
      > span:last-child {
        border: none;
      }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  margin-top: 60px;

  @media(max-width: 520px) {
    margin-top: 20px;
    position: relative;
    bottom: 40px;
  }
`;

export const Card = styled.div`
  width: 160px;
  height: 100px;
  margin-right: 20px;
  border-radius: 6px;
  color: var(--color-scale-gray-0);
  background-color: var(--color-scale-gray-9);
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-sizing: border-box;

  @media(max-width: 520px) {
    width: 32%;
    height: 70px;
  }

  h4 {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 8px;
    color: var(--color-scale-gray-0);

    .countNumber {
      font-size: 28px;
      font-weight: 400;
      margin-bottom: 8px;
      color: var(--color-scale-gray-0);

      @media(max-width: 520px) {
        font-size: 16px;
      }
    }
  }

  span {
    font-size: 9.5px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--color-scale-gray-2);

    @media(max-width: 520px) {
      font-size: 8px;
    }
  }
`;