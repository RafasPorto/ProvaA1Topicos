import axios from "axios";
import { useEffect, useState } from "react";
import { Despesa } from "../../models/despesa.model";
import Button from "@mui/material/Button";

function MediaDespesa() {
  const [totalDespesas, setTotalDespesas] = useState(0);
  const [mediaDespesas, setMediaDespesas] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/despesas")
      .then((resposta) => {
        const despesas = resposta.data;
        let total = 0;
        despesas.forEach((despesa : any) => {
          total += despesa.valor;
        });
        const media = total / despesas.length;
        setTotalDespesas(total);
        setMediaDespesas(media);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div>
      <h1>Média de Despesas</h1>
      <div>
        <p>Total de Despesas: R$ {totalDespesas.toFixed(2)}</p>
        <p>Média de Despesas: R$ {mediaDespesas.toFixed(2)}</p>
      </div>
      <div>
        <Button variant="outlined" color="error">
          Voltar
        </Button>
      </div>
    </div>
  );
}

export default MediaDespesa;
