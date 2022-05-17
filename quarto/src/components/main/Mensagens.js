export default function Mensagens(props){
    return (
        <div className="mensagens">
            <h2>Titulo da Mensagem</h2>
            {
                props.dados.map((itens,ix)=>(
                    
                        <li key={ix}>
                            <h3>{itens.msg[ix].autor}</h3>
                        <br/>
                        <p>{itens.msg[ix].mensagem}</p>
                        </li>

                    

                ))}
                
            <h3>Autor</h3>
            <p>Mensagem</p>
        </div>
    );
}