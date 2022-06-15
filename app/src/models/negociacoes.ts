import { IModelo } from "../interfaces/IModelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements IModelo<Negociacoes> {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    // Pode ser escrito "readonly Negociacao[]" ou da forma abaixo
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    public ehIgual(negociacoes: Negociacoes): boolean {
        return (
            JSON.stringify(this.negociacoes) ===
            JSON.stringify(negociacoes.lista())
        );
    }
}
