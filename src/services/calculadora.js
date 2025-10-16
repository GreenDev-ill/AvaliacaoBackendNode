class ServiceCalculadora{
    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar um número.")
        }
        const num1Int = num1 * 100;
        const num2Int = num2 * 100;
        const result = num1Int + num2Int;

        return result/100;

    }

    Subtrair (num1,num2){
        if (isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar um número.")
        }
        const num1Int = Math.fround(num1 * 1000);
        const num2Int = Math.fround(num2 * 1000);
        const result = num1Int - num2Int;

        return result/1000;

    }

    Multiplicar (num1,num2) {
        if (isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar um número.")
        }
        const num1Int = num1 * 100;
        const num2Int = num2 * 100;
        const result = Math.floor(num1Int * num2Int);
        
        return result/10000;

    }

    Dividir (num1,num2) {
        if (isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar um número válido.")
        } else if (num1 == 0 || num2 == 0) {
            throw new Error("Não é possível dividir por 0.")
        }
        const num1Int = num1 * 100;
        const num2Int = num2 * 100;
        const result = num1Int / num2Int;

        return result;
    }

    Potencia (num1,num2) {
        if (isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar um número válido.")
        } else if (num1 == 0) {
            return 0;
        } else if (num2 == 0) {
            return 1;
        }
        const result = num1 ** num2

        return result;
    }

    RaizQuadrada (num1) {
        if (isNaN(num1)){
            throw new Error("Favor informar um número válido.")
        } else if (num1 < 0) {
            throw new Error("Não é possível fazer raiz quadrada de número negativo.")
        }
        const result = num1 ** 0.5

        return result;
    }


}
export default new ServiceCalculadora() //fazer a instanciação automática