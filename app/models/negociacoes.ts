import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    // Pode ser escrito "readonly Negociacao[]" ou da forma abaixo
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}
