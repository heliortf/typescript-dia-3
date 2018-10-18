import { Locador } from './models/index';

let l = new Locador({ codigo: 20, nome: "Helio" });



console.log(l.getNome(), l.getCodigo(), "Status = ", l.getStatus());