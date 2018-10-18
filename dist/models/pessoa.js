"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusPessoa;
(function (StatusPessoa) {
    StatusPessoa["ATIVO"] = "ATIVO";
    StatusPessoa["INATIVO"] = "INATIVO";
})(StatusPessoa = exports.StatusPessoa || (exports.StatusPessoa = {}));
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this.Codigo = 0;
        this.Nome = "";
        this.status = StatusPessoa.ATIVO;
    }
    Pessoa.prototype.setNome = function (nome) {
        this.Nome = nome;
    };
    Pessoa.prototype.getNome = function () {
        return this.Nome;
    };
    Pessoa.prototype.setCodigo = function (codigo) {
        this.Codigo = codigo;
    };
    Pessoa.prototype.getCodigo = function () {
        return this.Codigo;
    };
    Pessoa.prototype.setStatus = function (status) {
        this.status = status;
    };
    Pessoa.prototype.getStatus = function () {
        return this.status;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
