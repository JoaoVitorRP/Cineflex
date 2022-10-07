import styled from "styled-components";

export default function Info(props) {
  const { sessionInfo, seatsNumber, orderInfo } = props;

  return (
    <InfoBox>
      <h3>Filme e sessão</h3>
      <p>
        {sessionInfo.movie.title}
        <br />
        {sessionInfo.day.date} {sessionInfo.name}
      </p>

      <h3>Ingressos</h3>
      {seatsNumber.map((num) => {
        return <p key={num}>Assento {num}</p>;
      })}

      <h3>Comprador</h3>
      <p>
        Nome: {orderInfo.name}
        <br />
        CPF: {orderInfo.cpf}
      </p>
    </InfoBox>
  );
}

const InfoBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  h3 {
    margin: 41px 0px 10px 0px;

    font-size: 24px;
    font-weight: 700;
    color: #293845;
    text-align: left;
  }

  p {
    font-size: 22px;
    line-height: 26px;
    text-align: left;
  }
`;
