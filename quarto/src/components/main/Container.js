import Conteudo from "./Conteudo";
import Mensagens from "./Mensagens";
import {useState,useEffect} from 'react';

export default function Container(){
    //Vamos iniciar o projeto lendo a url com os dados da api
    //neste caso temos os produtos para ler montar a tela do conteudo
    //Vamos usar o comando useState para iniciar o estado de dados
    //dos produtos. Depois usaremos o comando useEffect para carregar
    //os produtos que vem da api
    //O comando useEffect é um comando de laço, portanto é necessario fazer
    //ele para o laço quando terminar de carregar os dados. Isso é feito
    //usando um colchetes ao final da instrução
    //Para obter os dados iremos usar o comando fetch entro useEffect

    const [nome,setNome] = useState([
        {
            autor:"",
            mensagem:"",
        },
    ]);

    const [produtos,setProdutos] = useState([
        {
            id:"",
            nome:"",
            categoria:"",
            preco:"",
            msg:[],
        },

    ]);
    useEffect(()=>{
        fetch("http://10.26.44.36:5500/")
        .then((response)=>response.json())
        .then((dados)=>{
            setProdutos(dados.output);

        });

    },[]);

    const carregaMensagem = (mensagem) => 
    {
         setNome (mensagem);
        
    };
    return (
        <div className="container">
            <Mensagens info={nome}/>
            <Conteudo dados={produtos} acao = {carregaMensagem}/>
        </div>
    );
}