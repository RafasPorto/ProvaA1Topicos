import axios from "axios";
import { useState } from "react";
import { Despesa } from "../../models/despesa.model"; 
import Button from "@mui/material/Button";

function CadastroDespesa() {
  const [descricao, setDescricao] = useState(""); 
  const [valor, setValor] = useState(""); 

  function enviar() {
    let despesa: Despesa = new Despesa();
    despesa.descricao = descricao;
    despesa.valor = Number.parseFloat(valor); 

    axios
      .post("http://localhost:3333/despesas", despesa)
      .then((resposta) => {
        console.log(resposta.data.mensagem);
        setDescricao("");
        setValor("");
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <div>
      <h1>Cadastrar Despesa</h1>
      <div>
        <label>Descrição:</label>
        <input
          type="text"
          onChange={(event: any) => setDescricao(event.target.value)}
        />
      </div>
      <div>
        <label>Valor:</label>
        <input
          type="text"
          onChange={(event: any) => setValor(event.target.value)}
        />
      </div>
      <div>
        <Button variant="outlined" color="error" onClick={enviar}>
          Cadastrar
        </Button>
      </div>
    </div>
  );
}

export default CadastroDespesa;
