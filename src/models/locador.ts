import { Pessoa } from "./pessoa";


export class Locador extends Pessoa {


    constructor(params: { codigo: number, nome: string }) {
        super();

        this.setCodigo(params.codigo);
        this.setNome(params.nome);
    }

}
  

