import { domInjetctor } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    /* 
        Vamos utilizar o decorator de propriedade para evitar ficar repetindo código dentro do constructor.
         - document.querySelector(" ");
    */
    @domInjetctor("#data")
    private inputData: HTMLInputElement;
    @domInjetctor("#quantidade")
    private inputQuantidade: HTMLInputElement;
    @domInjetctor("#valor")
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();

    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemVIew = new MensagemView("#mensagemView");

    private negociacoesService = new NegociacoesService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    // Sintaxe para chamar o decorator.
    @inspect
    @logarTempoExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemVIew.update(
                "Apenas negociações em dias úteis são aceitas."
            );
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    public importaDados(): void {
        this.negociacoesService
            .obterNegociacoesDoDia()
            .then((negociacoesDeHoje) => {
                for (let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
            });
    }

    private ehDiaUtil(data: Date) {
        return (
            data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO
        );
    }

    private limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }

    private atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemVIew.update("Negociação adicionada com sucesso!");
    }
}
