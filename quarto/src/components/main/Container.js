import Conteudo from "./Conteudo";
import Mensagens from "./Mensagens";

export default function Container(){
    return (
        <div className="container">
            <Mensagens/>
            <Conteudo/>
        </div>
    );
}