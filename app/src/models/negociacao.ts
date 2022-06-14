import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements Imprimivel {
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
    ) {
        /*
        // Esse super é o construtor da classe Imprimivel que foi herdada, quando se usa o extends. 
        // É o construtor padrão das classes. Como mudamos a classe para uma interface não precimamos mais de 
        // construtor.
        super();
        */
    }
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

    public static criaDe(
        dataString: string,
        quantidadeString: string,
        valorString: string
    ): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public paraTexto(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }
}
