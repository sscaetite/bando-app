import React from "react";
import axios from "axios";
import ButtonBando from "../../../components/ButtonBando";

const HeaderArea = () => {
  const styleDiv = {
    marginTop: `${70}px`,
    height: "60vh",
    minHeight: "400px",
    paddingLeft: "10%",
    paddingRight: "10%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: `${0}px ${0}px ${20}px rgba(0,0,0,0.3)`,
    backgroundImage:
      "linear-gradient(to right bottom, rgba(237,241,245,0.9), rgba(222,224,227,0.9)), url(https://cdn.pixabay.com/photo/2018/03/17/19/01/grandstand-3234827_960_720.jpg)",
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `cover`
  };

  const styleH1 = {
    margin: `${0}px ${0}px ${0.1}em ${20}px`,
    color: "#424242",
    textAlign: "center",
    fontSize: 3 + "em",
    fontWeight: 500,
    fontFamily: "Roboto"
  };

  const styleH2 = {
    color: "#434343",
    margin: 0,
    textAlign: "center",
    fontSize: 1.3 + "em",
    fontWeight: 300,
    fontFamily: "Roboto"
  };

  const styleTextField = {
    padding: `${10}px`,
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: `${1}em`,
    color: "#434343"
  };

  return (
    <div style={styleDiv}>
      <div>
        <h1 style={styleH1}>Olá, Torcida da Loucura!</h1>
        <h2 style={styleH2}>
          <i>
            Eu sou o seu álbum de figurinhas do Bando. O meu papel é registrar
            um pouco da sua história na entidade, lembrar seus momentos mais
            marcantes por aqui e, também, incentivar a sua integração dentro do
            Bando.
          </i>
        </h2>
        <div
          style={{
            marginTop: `${2}em`,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <input
            id={"getCode"}
            type="text"
            placeholder="Insira seu Sticker Code"
            style={styleTextField}
          ></input>
          <ButtonBando
            type="submit"
            onClick={() => {
              let params = {
                url: `${document.getElementById("getCode").value.toString()}`
              };
              console.log(typeof params.url);
              axios
                .post(`http://api.bandoeach.com/`, params)
                .then(res => console.log(res));
            }}
          >
            Resgatar código
          </ButtonBando>
        </div>
      </div>
    </div>
  );
};

export default HeaderArea;
