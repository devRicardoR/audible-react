import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useRef, useEffect } from 'react';

import Capa from "./Capa";
import SeletorCapitulos from './SeletorCapitulos';
import BotoesControle from './BotoesControle';
import GerenciadorFaixa from './GerenciadorFaixa';
import ContainerProgresso from './containerProgresso';

import brasCubasImg from "./assets/bras_cubas.jpg";
import livro from './assets/capitulos/livro';

const App = () => {
  const [taTocando, definirTaTocando] = useState(false);
  const [faixaAtual, definirFaixaAtual] = useState(0);
  const [tempoTotalFaixa, definirTempoTotalDaFaixa] = useState(0);
  const [tempoAtualFaixa, definirTempoAtualDaFaixa] = useState(0);
  const tagAudio = useRef(null);

  function tocarFaixa() {
    tagAudio.current.play();
  }

  function pausarFaixa() {
    tagAudio.current.pause();
  }

  useEffect(() => {
    if (taTocando) {
      tocarFaixa();
    }
  }, [faixaAtual]);

  const informacoesLivro = {
    nome: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    totalCapitulos: 2,
    capa: brasCubasImg,
    capitulos: livro,
    textoAlternativo: "Capa do livro Memórias Póstumas de Brás Cubas."
  };

  const tocarOuPausarFaixa = () => {
    if (taTocando) {
      pausarFaixa();
      definirTaTocando(false);
    } else {
      tocarFaixa();
      definirTaTocando(true);
    }
  };

  const avancarFaixa = () => {
    if (informacoesLivro.totalCapitulos === faixaAtual + 1) {
      definirFaixaAtual(0);
    } else {
      definirFaixaAtual(faixaAtual + 1);
    }
  };

  const retrocederFaixa = () => {
    if (faixaAtual === 0) {
      definirFaixaAtual(informacoesLivro.totalCapitulos - 1);
    } else {
      definirFaixaAtual(faixaAtual - 1);
    }
  };

  const avancar15s = () => {
    tagAudio.current.currentTime += 15
  };

  const retroceder15s = () => {
    tagAudio.current.currentTime += 15
  };

  return (
    <>
      <Capa
        imagemCapa={informacoesLivro.capa}
        textoAlternativo={informacoesLivro.textoAlternativo}
      />

      <SeletorCapitulos
        capituloAtual={faixaAtual + 1}
      />

      <GerenciadorFaixa
        faixa={informacoesLivro.capitulos[faixaAtual]}
        referencia={tagAudio}
        definirTempoTotalDaFaixa={definirTempoTotalDaFaixa}
        definirTempoAtualDaFaixa={definirTempoAtualDaFaixa}
      />

      <ContainerProgresso
        tempoTotalFaixa={tempoTotalFaixa}
        tempoAtualFaixa={tempoAtualFaixa}
      />

      <BotoesControle
        taTocando={taTocando}
        tocarOuPausarFaixa={tocarOuPausarFaixa}
        avancarFaixa={avancarFaixa}
        retrocederFaixa={retrocederFaixa}
        avancar15s={avancar15s}
        retroceder15s={retroceder15s}
      />
    </>
  );
};

export default App;