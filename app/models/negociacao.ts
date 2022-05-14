export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    // constructor(data: Date, quantidade: number, valor: number) {
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }

    // --------------------------------------------------//

    // O código acima pode ser escrito (em TypeScript) da seguinte forma:
    // constructor(
    //     private _data: Date,
    //     private _quantidade: number,
    //     private _valor: number
    // ) {}

    // get data(): Date {
    //     return this._data;
    // }

    // get quantidade(): number {
    //     return this._quantidade;
    // }

    // get valor(): number {
    //     return this._valor;
    // }

    // --------------------------------------------------//

    // Os getters e o construtor acima podem ser escritos da seguinte forma:
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}
    // O readonly só não deixa trabalhar com atribuição, os valores ainda podem ser modificados
    // com método invocados neles. Ex. negociacao.data.setDate();

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    // --------------------------------------------------//
    get volume(): number {
        return this.quantidade * this.valor;
    }
}
