//import { milhasToKm, somar, salario, media5Pesos, celsiusToFahrenheit } from '../services/exercicios.js'
import ServiceCalculadora from "../services/calculadora.js"

class ControllerCalculadora{
    Somar (req,res) {
        try {
            const num1 = req.body.num1   // pega o valor do parametro num1
            const num2 = req.body.num2   // pega o valor do parametro num2
            console.log(req.body)
            const result = ServiceCalculadora.Somar(num1, num2)
            res.status(200).send({
                msg: "Resultado da soma: "+ result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true //para um código mais padronizado par ao front-end o melhor seria algo tipo NOT_FOUND_ERROR
            })
        }
    }

    Subtrair (req,res) {
        try {
            const num1 = req.body.num1   // pega o valor do parametro num1
            const num2 = req.body.num2   // pega o valor do parametro num2
            console.log(req.body)
            const result = ServiceCalculadora.Subtrair(num1, num2)
            res.status(200).send({
                msg: "Resultado da subtração: "+ result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true //para um código mais padronizado par ao front-end o melhor seria algo tipo NOT_FOUND_ERROR
            })
        }
    }

    Multiplicar (req,res) {
        try {
            const num1 = req.body.num1   // pega o valor do parametro num1
            const num2 = req.body.num2   // pega o valor do parametro num2
            console.log(req.body)
            const result = ServiceCalculadora.Multiplicar(num1, num2)
            res.status(200).send({
                msg: "Resultado da multiplicação: "+ result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true //para um código mais padronizado par ao front-end o melhor seria algo tipo NOT_FOUND_ERROR
            })
        }
    }

    Dividir (req,res) {
        try {
            const num1 = req.body.num1   // pega o valor do parametro num1
            const num2 = req.body.num2   // pega o valor do parametro num2
            console.log(req.body)
            const result = ServiceCalculadora.Dividir(num1, num2)
            res.status(200).send({
                msg: "Resultado da divisão: "+ result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true //para um código mais padronizado par ao front-end o melhor seria algo tipo NOT_FOUND_ERROR
            })
        }
    }

    Potencia (req,res) {
        try {
            const num1 = req.body.num1   // pega o valor do parametro num1
            const num2 = req.body.num2   // pega o valor do parametro num2
            console.log(req.body)
            const result = ServiceCalculadora.Potencia(num1, num2)
            res.status(200).send({
                msg: "Resultado da potenciação: "+ result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true //para um código mais padronizado par ao front-end o melhor seria algo tipo NOT_FOUND_ERROR
            })
        }
    }

    RaizQuadrada (req,res) {
        try {
            const num1 = req.body.num1   // pega o valor do parametro num1
            //const num2 = req.body.num2   // pega o valor do parametro num2
            console.log(req.body)
            const result = ServiceCalculadora.RaizQuadrada(num1)
            res.status(200).send({
                msg: "Resultado da raiz quadrada: "+ result,
                data: result,
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true //para um código mais padronizado par ao front-end o melhor seria algo tipo NOT_FOUND_ERROR
            })
        }
    }

}
export default new ControllerCalculadora()