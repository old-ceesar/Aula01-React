// Faz a conversão do jsx
// useState, fazendo o coponente ficar mais inteligente
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Mostrar1 = props => {
  return <p>{props.i}</p>;
};

// elemento (É o menos bloco que em React)
//jsx, melhor form para descrever um elemento em arvore
const elemento = (
  <div>
    <h2>Olá, seu animal</h2>
  </div>
);

// sem o jsx
const elemento02 = React.createElement(
  "div",
  null,
  React.createElement("h2", null, "Olá, devPleno")
);

function App(props) {
  const [i, seti] = useState(1);
  const increment = () => {
    seti(i + 1);
  };

  return (
    <div className="App">
      <h1>
        Hello {props.name} {i}
      </h1>
      {/* Chamando o increment */}
      <button onClick={increment}>incrementar</button>
      <h2>Start editing to see some magic happen!</h2>
      {elemento}
      {elemento02}
      <Mostrar1 i={i} />
    </div>
  );
}

function Game() {
  //Estado do game: Entrando, rodando e fim
  const [estado, setEstado] = useState("ENTRADA");

  //Palpite da máquina
  const [palpite, setPalpite] = useState(150);
  const [numpalpites, setNumpalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(350);
    setNumpalpites(1);
    setPalpite(150);
  };
  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar!</button>;
  }

  const menor = () => {
    setNumpalpites(numpalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };
  const maior = () => {
    setNumpalpites(numpalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };
  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div className="Game">
        <p>
          Acertei o número {palpite} com {numpalpites} chutes!
        </p>
        <button onClick={iniciarJogo}>Inicar novamente</button>
      </div>
    );
  }
  return (
    <div className="Game">
      <h1>Games</h1>
      <p>Seu palpite é de: {palpite}</p>
      <p>
        Min {min} / Max {max}
      </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="DevPleno" />, rootElement);
ReactDOM.render(<Game />, rootElement);
// componente funcional (organiza e quebra a interface em mais partes, isolando partes, para ser reutilizar e retornando no dom real
// Abrir chaves para adicionar um elemento
// As vezes é necessário alterar alguns propriedades do HTML normal, como no exemplo abaixo
// Podemos receber propriedades e passar um valor
//Hook acessando dados de fora, para ser rederizado novamente
//Gurando i e usando ele para alteração, está guarndo o valor de i, sabendo que toda vez, teria que rodar novamente
//Arrow function
//Sempre usar no começo da função e mantendo uma ordem
//Usando [] começa da poseção 0
// React só atualiza o que for necessário. Usando JS puro para deixar mais leve
// Nota: Evitar editar o DOM real para deixar mais utimizado
