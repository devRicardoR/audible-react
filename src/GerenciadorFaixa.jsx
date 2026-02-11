const GerenciadorFaixa = ({ 
    faixa, 
    referencia, 
    definirTempoTotalDaFaixa, 
    definirTempoAtualDaFaixa 
}) => {
    return <audio 
    src={faixa} 
    ref={referencia} 
    onLoadedMetadata={() => definirTempoTotalDaFaixa(referencia.current.duration)}
    onTimeUpdate={() => definirTempoAtualDaFaixa(referencia.current.currentTime)}
    />
};

export default GerenciadorFaixa;