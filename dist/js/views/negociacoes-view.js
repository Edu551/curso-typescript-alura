import { View } from "./view.js";
export class NegociacoesView extends View {
    // o método Intl.DateTimeFormat irá formatar a data de acordo com o navegador
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model
            .lista()
            .map((negociacao) => {
            return `
                        <tr>
                            <td>${this.formatarData(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
        })
            .join("")}
            </tbody>
        </table>        
        `;
    }
    formatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
