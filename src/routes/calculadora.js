import express from 'express'
import ControllerCalculadora from '../controller/calculadora.js'

const router = express.Router()

//configura uma rota para o método HTTP GET na raiz do aplicativo
router.get('/', (req, res) => {
    //retorna uma resposta JSON contendo a mensagem "Olá mundo!"
    res.json({ message: 'Servidor Calculadora rodando! Utilize nossas requisições: /somar/, /subtrair/, /multiplicar/, /dividir/, /potencia/ ou /raizquadrada/' });
});

router.post('/somar/', ControllerCalculadora.Somar)
router.post('/subtrair/', ControllerCalculadora.Subtrair)
router.post('/multiplicar/', ControllerCalculadora.Multiplicar)
router.post('/dividir/', ControllerCalculadora.Dividir)
router.post('/potencia/', ControllerCalculadora.Potencia)
router.post('/raizquadrada/', ControllerCalculadora.RaizQuadrada)

export default router;