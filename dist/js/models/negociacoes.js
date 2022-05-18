export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // Pode ser escrito "readonly Negociacao[]" ou da forma abaixo
    lista() {
        return this.negociacoes;
    }
}
