import { useState } from "react";
import styled from "styled-components";

export default function BuyerData(props) {
  const { setBuyerName, setBuyerCPF, setCpfValid } = props;

  const [errorText, setErrorText] = useState("");

  function checkCPF(number) {
    if (number.length === 11) {
      setErrorText("");
      setCpfValid(true);
    } else {
      setCpfValid(false);
      setErrorText("Insira um número válido!");
    }
    setBuyerCPF(number);
  }

  return (
    <DataContainer>
      <label htmlFor="Name">Nome do comprador:</label>
      <input
        placeholder="Digite seu nome..."
        id="Name"
        data-identifier="buyer-name-input"
        required
        onChange={(e) => setBuyerName(e.target.value)}
      ></input>
      <label htmlFor="CPF">CPF do comprador:</label>
      <input
        placeholder="Ex: 12345678910"
        type="number"
        id="CPF"
        data-identifier="buyer-cpf-input"
        required
        onChange={(e) => checkCPF(e.target.value)}
      ></input>
      <p>{errorText}</p>
    </DataContainer>
  );
}

const DataContainer = styled.div`
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;

  label {
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

  p {
    margin-top: -10px;
    color: #d0342c;
  }
`;
