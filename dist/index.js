"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
const capitais = {
    AC: "Rio Branco",
    AL: "Maceio",
    AP: "Macapa",
    AM: "Manaus",
    BA: "Salvador",
    CE: "Fortaleza",
    DF: "Brasilia",
    ES: "Vitoria",
    GO: "Goiania",
    MA: "Sao Luis",
    MT: "Cuiaba",
    MS: "Campo Grande",
    MG: "Belo Horizonte",
    PA: "Belem",
    PB: "Joao Pessoa",
    PR: "Curitiba",
    PE: "Recife",
    PI: "Teresina",
    RJ: "Rio de Janeiro",
    RN: "Natal",
    RS: "Porto Alegre",
    RO: "Porto Velho",
    RR: "Boa Vista",
    SC: "Florianopolis",
    SP: "Sao Paulo",
    SE: "Aracaju",
    TO: "Palmas",
};
app.get("/UF/:SIGLA", (req, res) => {
    const SIGLA = req.params.SIGLA.toUpperCase();
    const capital = capitais[SIGLA];
    if (!capital) {
        return res.status(404).json({ SIGLA, error: "UF não encontrada" });
    }
    return res.json({ SIGLA, capital });
});
app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`);
});
