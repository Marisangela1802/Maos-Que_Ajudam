import './doacoes.css'
import Doar from './doar'
// import Doacao from './doacoes'
import { useState } from "react"

const Overlay = () => {
    const [fecharOverlay, setFecharOverlay] = useState(false)
    const [doar, setDoar] = useState(false)

    const FecharOverlay = () => {
        setFecharOverlay(true)
    }

    if(fecharOverlay==true){
        return null
    }

    const AbrirPaginaDoar = () => {
        setDoar(true)
    }


    return (
        <div>

            <div className='overlay'>
                <div className='detalhes-pedidos'>
                    <div className="titulo">
                        <h1>Detalhes</h1>
                    </div>
                    <div className="conteudo-detalhes">
                        <div className="texto-detalhes">
                            <h4>Resumo:</h4>
                        </div>
                        <div className="texto-detalhes">
                            <h4>Endereço:</h4>
                        </div>
                        <div className="texto-detalhes">
                            <h4>Tipo de Item:</h4>
                        </div>
                        <div className="texto-detalhes">
                            <h4>Destinatário:</h4>
                        </div>
                        <div className="texto-detalhes">
                            <h4>Código:</h4>
                        </div>
                        <div className="botoes">
                            <button onClick={AbrirPaginaDoar} className="botao-doar">Doar</button>
                            <button onClick={FecharOverlay} className="botao-ok">OK</button>

                        </div>
                    </div>
                </div>
            </div>
            {doar && <Doar/>}
        </div>
    )
}


export default Overlay