export function logarTempoExecucao(emSegundos: boolean = false) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        // Ao usar o "...args" os argumentos chegam em um Array e são desconstruidos.
        descriptor.value = function (...args: Array<any>) {
            let divisor = 1;
            let unidade = "milissegundos";

            if (emSegundos) {
                divisor = 1000;
                unidade = "segundos";
            }
            const t1 = performance.now();
            // O método apply() usa o this do método original e passa os args (argumentos) um a um.
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(
                `${propertyKey}, tempo de execução: ${
                    (t2 - t1) / divisor
                } ${unidade}.`
            );

            retorno;
        };

        return descriptor;
    };
}
