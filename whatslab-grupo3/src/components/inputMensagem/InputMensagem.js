import React from 'react';


class InputMensagem extends React.Component{
    state = {
        mensagens: [

        ],

        valorInputNome: "",

        valorInputTexto: ""

    }

    adicionaMensagem = (e) => {

        e.preventDefault();

        const novaMensagem = {
            nome: this.state.valorInputNome,
            texto: this.state.valorInputTexto
        }

        const novasMensagens = [...this.state.mensagens, novaMensagem];

        this.setState({mensagens: novasMensagens});
    
    };

    onChangeInputNome = (event) => {

        this.setState({valorInputNome: event.target.value});        

    };
    onChangeInputTexto = (event) => {

        this.setState({valorInputTexto: event.target.value});        

    };

    render(){
        const listaDeMensagens = this.state.mensagens.map((mensagem) => {
            return(
            <p><strong>{mensagem.nome}:</strong> {mensagem.texto}</p>
            )
        })

        return(
            <div>
                <ul>
                {listaDeMensagens}
                </ul>
                <form>
                    <input value={this.state.valorInputNome} placeholder="Nome" onChange={this.onChangeInputNome} />
                    <input value={this.state.valorInputTexto} placeholder="Texto" onChange={this.onChangeInputTexto} />
                    <button onClick={this.adicionaMensagem}>Enviar</button>
                </form>
                </div>
        )
    }
}

export default InputMensagem;