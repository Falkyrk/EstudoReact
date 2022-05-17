
export default function Conteudo(props){

    





    return (
        <div className="conteudo">
            <h2>Produtos</h2>
            <div className="items">
            {
                props.dados.map((itens,index) =>(
                    <div key={index}>
                        <h3>{itens.nome}</h3>
                        <p>{itens.categoria}</p>
                        <p className="preco">R$ {itens.preco}</p>
                        </div>

                ))
            }
            </div>
        </div>
    );
}