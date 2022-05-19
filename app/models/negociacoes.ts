import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    // Pode ser escrito "readonly Negociacao[]" ou da forma abaixo
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}
