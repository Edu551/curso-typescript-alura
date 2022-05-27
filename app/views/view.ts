export abstract class View<T> {
    protected elemento: HTMLElement;
    // Escapar previne que algum script não desejado seja inserido dentro do HTML e mostrado na tela.
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);

        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} n]ao existe no DOM.`);
        }

        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}
