import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .condition {
    color: #b0c5d1;
    margin-bottom: 1rem;
  }
  .value {
    color: #fff;
    margin-bottom: 1rem;
  }
`;

const Condition = ({ name, value }) => {
  return (
    <Container>
      <p className="condition">{name}</p>
      <p className="value">{value}</p>
    </Container>
  );
};

export default Condition;
