import React from 'react';
import styled from 'styled-components'

const Formulario = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    width: 480px;
    margin: 10px auto;
    display: flex;
    justify-content: space-evenly;
`

const Mensagem = styled.div`
    display: flex;
    text-align: left;
    justify-content: flex-end;
    flex-direction: column;
    height: 90%;
    width: 478px;
    padding: 10px;
`

const MensagemEu = styled.p`
    align-self: flex-end;
    word-wrap: auto;
    word-break: break-all;
    padding: 10px;
    border-radius: 5px;
    color: #333;
    background-color: skyblue;
`
const MensagemDestinatario = styled.p`
    align-self: flex-start;
    width: auto;
    word-wrap: auto;
    word-break: break-all;
    padding: 10px;
    border-radius: 5px;
    color: #333;
    background-color: aliceblue;
`

const InputNome = styled.input`
    outline: none;
    border: darkcyan solid 1px;
    border-radius: 5px;
    padding: 10px;
    width: 15%;
`
const InputTexto = styled.input`
    outline: none;
    border: darkcyan solid 1px;
    border-radius: 5px;
    padding: 10px;
    width: 70%;
`
const BotaoEnviar  = styled.button`
    outline: none;
    margin: 0 10px;
    font-weight: bolder;
    border: darksalmon 1px solid;
    border-radius: 5px;
    padding: 0 10px;
    background-color: salmon;
    color: white;
`
let uniqueKey = 0;

class InputMensagem extends React.Component{
    state = {
        mensagens: [
            
        ],

        valorInputNome: "",

        valorInputTexto: "",

    }

    adicionaMensagem = (e) => {

        e.preventDefault();

        let nomeUser = this.state.valorInputNome.toLowerCase();
        let souEu = false;

        if(nomeUser === "eu"){
            souEu = true;
        }else{
            souEu = false;
        }

        const novaMensagem = {
            nome: this.state.valorInputNome,
            texto: this.state.valorInputTexto,
            key: uniqueKey.toString(),
            souEu: souEu
        }


        const novasMensagens = [...this.state.mensagens, novaMensagem];

        this.setState({mensagens: novasMensagens, valorInputTexto: ""});
        
        uniqueKey++;
    };

    onKeyEnter = (e) =>{
        if(e.key === "Enter"){
            this.adicionaMensagem(e);
        }
    }

    onChangeInputNome = (event) => {

        this.setState({valorInputNome: event.target.value});        

    };
    onChangeInputTexto = (event) => {

        this.setState({valorInputTexto: event.target.value});        

    };

<<<<<<< HEAD
    removeMensagem = (e) =>{

        const key = e.target.getAttribute("data-key");
        console.log(this.state.mensagens);
        if(window.confirm("Deseja mesmo excluir esta mensagem?")){
        this.setState({mensagens: this.state.mensagens.filter(mensagem => {
            return mensagem.key !== key;
        })})
    }

=======
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
>>>>>>> cb523b22f648c6eedbfd2b887c80431470aeb5f4
    }

    render(){
        const listaDeMensagens = this.state.mensagens.map((mensagem) => {
            if(mensagem.souEu){
                return(
                    <MensagemEu data-key={mensagem.key} key={mensagem.key} onDoubleClick={this.removeMensagem}><strong data-key={mensagem.key} key={mensagem.key} >{mensagem.nome}:</strong> {mensagem.texto}</MensagemEu>
                    )
            }else{
                return(
                <MensagemDestinatario data-key={mensagem.key} key={mensagem.key} onDoubleClick={this.removeMensagem}><strong data-key={mensagem.key} key={mensagem.key} >{mensagem.nome}:</strong> {mensagem.texto}</MensagemDestinatario>
                )
            }
        })

        return(
            <div>
                <Mensagem>
                {listaDeMensagens}
                </Mensagem>
                <Formulario>
<<<<<<< HEAD
                    <InputNome value={this.state.valorInputNome} placeholder="Usuário" onChange={this.onChangeInputNome} />
                    <InputTexto value={this.state.valorInputTexto} placeholder="Mensagem" onChange={this.onChangeInputTexto} onKeyPress={this.onKeyEnter} />
                    <BotaoEnviar onClick={this.adicionaMensagem}>Enviar</BotaoEnviar>
=======
                    <input value={this.state.valorInputNome} placeholder="Usuário" onChange={this.onChangeInputNome} />
                    <input value={this.state.valorInputTexto} placeholder="Mensagem" onChange={this.onChangeInputTexto} />
                    <button onClick={this.adicionaMensagem} onKeyDown={this.onKeyDownEnter} onDoubleClick={this.removeMensagem}>Enviar</button>
>>>>>>> cb523b22f648c6eedbfd2b887c80431470aeb5f4
                </Formulario>
                </div>
        )
    }
}

export default InputMensagem;