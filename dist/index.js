"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./models/index");
var l = new index_1.Locador({ codigo: 20, nome: "Helio" });
console.log(l.getNome(), l.getCodigo(), "Status = ", l.getStatus());
