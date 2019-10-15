import styled from "styled-components";

const ButtonBando = styled.button`

  background-color: ${props => props.light ?  `#ededed` : `#0f0f0f`};
  border: 2px solid #0f0f0f;
  color: ${props => props.light ? `#0f0f0f` : `#ededed`};
  padding-top: ${props => props.padding ? `${6}px` : "auto"};
  padding-bottom: ${props => props.padding ? `${6}px` : "auto"};
  padding-left: 15px;
  padding-right: 15px;
  text-decoration: none;
  font-family: "Roboto";
  font-weight: ${props => props.bold ? 400 : 300};
  font-size: 1em;

  :hover {
    background-color: ${props => props.light ? `#0f0f0f` : `#ededed`};
    color: ${props => props.light ? `#ededed` : `#0f0f0f`};
  }
`;

export default ButtonBando;
