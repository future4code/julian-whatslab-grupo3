import React from 'react';
import styled from 'styled-components'

const Formulario = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
`

const Mensagem = styled.div`
    display: flex;
    text-align: left;
    justify-content: flex-end;
    flex-direction: column;
    height: 90%;
    padding: 10px;
`

class InputMensagem extends React.Component{
    state = {
        mensagens: [],

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

        this.setState({mensagens: novasMensagens, valorInputTexto: ""});
    
    };

    onChangeInputNome = (event) => {

        this.setState({valorInputNome: event.target.value});        

    };
    onChangeInputTexto = (event) => {

        this.setState({valorInputTexto: event.target.value});        

    };

    //onkeydown ainda não funciona
    onKeyDownEnter = (event) => {
        if (event.key === "Enter") {
            this.adicionaMensagem();
        }
    }

    //doubleclick ainda não funciona
    removeMensagem = (mensagemIndex) => {
        if (window.confirm("Tem certeza que deseja deletar essa mensagem?")) {
            const mensagemRemovida = this.state.mensagens;

            mensagemRemovida.splice(mensagemIndex, 1);
        }

        this.setState({ mensagens: mensagemRemovida });
    }

    render(){
        const listaDeMensagens = this.state.mensagens.map((mensagem) => {
            return(
            <p><strong>{mensagem.nome}:</strong> {mensagem.texto}</p>
            )
        })

        return(
            <div>
                <Mensagem>
                {listaDeMensagens}
                </Mensagem>
                <Formulario>
                    <input value={this.state.valorInputNome} placeholder="Usuário" onChange={this.onChangeInputNome} />
                    <input value={this.state.valorInputTexto} placeholder="Mensagem" onChange={this.onChangeInputTexto} />
                    <button onClick={this.adicionaMensagem} onKeyDown={this.onKeyDownEnter} onDoubleClick={this.removeMensagem}>Enviar</button>
                </Formulario>
                </div>
        )
    }
}

export default InputMensagem;