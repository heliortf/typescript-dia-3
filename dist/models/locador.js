"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
var Locador = /** @class */ (function (_super) {
    __extends(Locador, _super);
    function Locador(params) {
        var _this = _super.call(this) || this;
        _this.setCodigo(params.codigo);
        _this.setNome(params.nome);
        return _this;
    }
    return Locador;
}(pessoa_1.Pessoa));
exports.Locador = Locador;
