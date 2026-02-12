const ContainerProgresso = (props) => {
    const formatarTempo = (tempoEmSegundos) => {
        const tempo = new Date(null)
        tempo.setSeconds(tempoEmSegundos)
        return tempo.toISOString().slice(14, 19)
    };

    return (
        <section className="container-progresso">
            <div className="progresso-total">
                <div className="progresso-atual" style={{
                    width: `${props.tempoAtualFaixa*100/props.tempoTotalFaixa}%`
                }}></div>
                <div className="marcador-posicao" style={{
                    left: `${props.tempoAtualFaixa*100/props.tempoTotalFaixa}%`
                }}></div>
            </div>
            <div className="metricas-tempo">
                <p>{formatarTempo(props.tempoAtualFaixa)}</p>
                <p>{formatarTempo(props.tempoTotalFaixa)}</p>
            </div>
        </section>
    )
};

export default ContainerProgresso;