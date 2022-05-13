import { useState } from "react";
function App() {
  const [produto, setProduto] = useState([
    {
      id:500,
      nome:"Mouse",
      categoria:"Informática",
      quantidade:15,
      preco:50.00
    },
    {
      id:501,
      nome:"Teclado",
      categoria:"Informática",
      quantidade:20,
      preco:150.90
    }

  ]);
  

  return (
    <div>
      <button onClick={()=>{
       var cod = prompt("Entre com o código");
       var no = prompt("Entre com o nome do produto");
       var cat = prompt("Entre com a categotia");
       var qt = prompt("Entre com a quantidade");
       var pr = prompt("Entre com o preço");

        setProduto(produto.concat({
        id:cod,
        nome:no,
        categoria:cat,
        quantidade:qt,
        preco:pr,
      }));}}
      >
      Clique</button>


      {produto.map((item,index)=>(
        <div key={index}>

      <h2>{item.nome}</h2>
      <ul>
        <li>Código: {item.id}</li>
        <li>Categoria: {item.categoria}</li>
        <li>Quantidade: {item.quantidade}</li>
        <li>Preço: {item.preco}</li>
      </ul>
      </div>
      ))}

      
    </div>
  );
}

export default App;
