import styled from "styled-components";

export default function BuyerData() {
  return (
    <DataContainer>
      <h3>Nome do comprador:</h3>
      <input placeholder="Digite seu nome..."></input>
      <h3>CPF do comprador:</h3>
      <input placeholder="Digite seu CPF..."></input>
    </DataContainer>
  );
}

const DataContainer = styled.div`
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    margin-bottom: 4px;
  }

  input {
    width: 327px;
    height: 51px;
    padding: 18px;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    margin-bottom: 15px;

    font-size: 18px;
    color: #293845;
  }

  input::placeholder {
    font-size: 18px;
    font-style: italic;
    color: #afafaf;
  }
`;
