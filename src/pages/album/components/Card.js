import React from "react";
import { Achievement } from "grommet-icons";
import img from "../../../assets/caipi-019.jpg";
import img2 from "../../../assets/teste.jpg";
//import { Grid, Box, Button, Text } from "grommet";

const Card = props => {
  const styleCard = {
    margin: `${20}px`,
    padding: `${0}em ${1.5}em ${1.5}em ${1.5}em `,
    width: `${(500 / 5) * 3}px`,
    minWidth: `${(500 / 5) * 3}px`,
    minHeight: `${(750 / 5) * 3}px`,
    boxShadow: `${10}px ${10}px ${20}px rgba(${0}, ${0}, ${0}, ${0.6})`,
    backgroundImage: `url(${img})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `cover`
  };

  const div1Style = {
    height: "20%",
    display: `flex`,
    alignItems: `center`
  };

  const div2Style = {
    height: "50%",
    whidth: "100%"
  };

  const div3Style = {
    background: "white",
    height: "28%",
    padding: `${0}em ${1.5}em ${0}em ${1.5}em `,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  };

  const cor = {
    margin: `${0}px ${10}px ${0}px ${0}px `
  };

  return (
    <div style={styleCard}>
      <div style={div1Style}>
        <Achievement style={cor} color="white" size={`${40}px`}></Achievement>
        <div>
          <h5
            style={{
              margin: `${0}px`,
              color: "white",
              marginBlockEnd: `${0}em`,
              marginBlockStart: `${0}em`
            }}
          >
            Coleção
          </h5>
          <h3 style={{ margin: `${0}px`, color: "white" }}>
            {props.collection}
          </h3>
        </div>
      </div>
      <div style={div2Style}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={`${img2}`}
        ></img>
      </div>
      <div style={div3Style}>
        <div>
          <h3
            style={{
              margin: `${0}px`,
              color: "black",
              textAlign: "center",
              fontFamily: "Mali"
            }}
          >
            {props.title}
          </h3>
          <i>
            <p
              style={{
                margin: `${0}px`,
                color: "black",
                textAlign: "center",
                fontFamily: "Mali"
              }}
            >
              {props.caption}
            </p>
          </i>
        </div>
      </div>
    </div>
  );
};

export default Card;
