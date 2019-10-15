import React, { useState } from "react";
import styled from "styled-components";

const MemberCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OutsideDiv = styled.div`
    background: ${isOpen === false ? "#ffffff" : "#f85421"};
    height: ${isOpen === true ? `100%` : `25%`};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${isOpen === true ? "white" : "black"};

    :hover {
      background: #f85421;
      color: white;
    }
  `;

  const InsideDiv = styled.div`
    background: #f58f59;
    width: 30vw;
    min-width: 400px;
    height: 30vw;
    min-height: 400px;
    margin: 20px;
    display: flex;
    background-image: url("https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex-direction: column-reverse;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  `;

  const TextArea = styled.div``;

  const Title = styled.h1`
    margin: 0;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 1.3em;
    text-transform: uppercase;
    text-align: center;
  `;

  const SubTitle = styled.h2`
    margin: 0;
    text-align: center;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.2em;
    font-style: italic;
    text-align: center;
  `;

  return (
    <InsideDiv onClick={() => setIsOpen(!isOpen)}>
      <OutsideDiv onClick={() => setIsOpen(!isOpen)}>
        <TextArea>
          <Title>Samuel Caetité</Title>
          <SubTitle>Aspira "Hétero"</SubTitle>
        </TextArea>
      </OutsideDiv>
    </InsideDiv>
  );
};

export default MemberCard;
