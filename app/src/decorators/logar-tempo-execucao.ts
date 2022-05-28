export function logarTempoExecucao() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        // Ao usar o "...args" os argumentos chegam em um Array e são desconstruidos.
        descriptor.value = function (...args: Array<any>) {
            const t1 = performance.now();

            // O método apply() usa o this do método original e passa os args (argumentos) um a um.
            const retorno = metodoOriginal.apply(this, args);

            const t2 = performance.now();
            console.log(
                `${propertyKey}, tempo de execução: ${
                    (t2 - t1) / 1000
                } segundos.`
            );

            retorno;
        };

        return descriptor;
    };
}
