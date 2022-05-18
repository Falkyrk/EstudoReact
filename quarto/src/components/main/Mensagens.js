import {useCallback, useState} from "react";
export default function Mensagens(props){

    const [produto,setProduto] = useState("");
     
    return (
        <div className="mensagens">

         {props.info.map((m,i)=>(
             <div key={i}>

          


            
            
            
            
            
            <h2>Titulo da Mensagem: {m.titulo}</h2>
            
                
            <h3>Autor: {m.autor}</h3>
            <p>Mensagem:{m.mensagem}</p>
            <hr/>
            <br/>
            </div>



            ))} 
        </div>
    );
}