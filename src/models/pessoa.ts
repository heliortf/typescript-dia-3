

export enum StatusPessoa {
    ATIVO = "ATIVO",
    INATIVO = "INATIVO"
}

export abstract class Pessoa {


    protected Codigo: number;
    protected Nome: string;
    protected status: StatusPessoa; 

    constructor() {
        this.Codigo = 0;
        this.Nome = "";
        this.status = StatusPessoa.ATIVO;
    }

    setNome(nome: string) {
        this.Nome = nome;
    }

    getNome(): string {
        return this.Nome;
    }

    setCodigo(codigo: number): void {
        this.Codigo = codigo;
    }

    getCodigo(): number {
        return this.Codigo;
    }

    setStatus(status: StatusPessoa) {
        this.status = status;
    }

    getStatus(): StatusPessoa {
        return this.status;
    }
}
  

