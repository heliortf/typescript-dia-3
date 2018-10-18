"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Locador = /** @class */ (function () {
    function Locador(params) {
        this.CodigoLocador = params.codigo;
        this.NomeLocador = params.nome;
    }
    Locador.prototype.setNomeLocador = function (nome) {
        this.NomeLocador = nome;
    };
    Locador.prototype.getNomeLocador = function () {
        return this.NomeLocador;
    };
    Locador.prototype.setCodigoLocador = function (codigo) {
        this.CodigoLocador = codigo;
    };
    Locador.prototype.getCodigoLocador = function () {
        return this.CodigoLocador;
    };
    return Locador;
}());
exports.Locador = Locador;
