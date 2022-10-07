import styled from "styled-components";

export default function Info(props) {
  const { sessionInfo, seatsNumber, orderInfo } = props;

  let CPF = orderInfo.cpf.toString();
  CPF = CPF.slice(0, 3) + "." + CPF.slice(3,6) + "." + CPF.slice(6,9) + "-" + CPF.slice(9);

  return (
    <InfoBox>
      <h3>Filme e sessão</h3>
      <p data-identifier="movie-session-infos-reserve-finished">
        {sessionInfo.movie.title}
        <br />
        {sessionInfo.day.date} {sessionInfo.name}
      </p>

      <h3>Ingressos</h3>
      {seatsNumber.map((num) => {
        return <p key={num} data-identifier="seat-infos-reserve-finished">Assento {num}</p>;
      })}

      <h3>Comprador</h3>
      <p data-identifier="buyer-infos-reserve-finished">
        Nome: {orderInfo.name}
        <br />
        CPF: {CPF}
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
