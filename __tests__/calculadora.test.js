import {describe,it,expect} from '@jest/globals' // libs para teste
import ServiceCalculadora from '../src/services/calculadora.js'

describe('Testando função somar',()=>{
    it('Somando dois números positivos',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Somar(1,2)
        expect(resultado).toBe(3)
    }) 
    it('Somando dois números positivos com vírgula',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Somar(1.0001,2.0002)
        expect(resultado).toBe(3.0003)
    }) 
    it('Somando dois números negativos',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Somar(-5,-10)
        expect(resultado).toBe(-15)
    })
    it('Somando dois números positivos grandes',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Somar(1000000000000,1000000000000)
        expect(resultado).toBe(2000000000000)
    }) 
})

describe('Testando função subtração',()=>{
    it('Subtraindo dois números positivos',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Subtrair(3,2)
        expect(resultado).toBe(1)
    }) 
    it('Subtraindo dois números positivos com vírgula',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Subtrair(3.003,2.002)
        expect(resultado).toBe(1.001)
    }) 
    it('Subtraindo um número negativo e outro positivo',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Subtrair(-50,10)
        expect(resultado).toBe(-60)
    })
    it('Subtraindo dois números positivos grandes',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Subtrair(10000000,20000000)
        expect(resultado).toBe(-10000000)
    }) 
})

describe('Testando função multiplicação',()=>{
    it('Multiplicando dois números positivos',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Multiplicar(1,2)
        expect(resultado).toBe(2)
    }) 
    it('Multiplicando dois números positivos com vírgula',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Multiplicar(3.1,2.2)
        expect(resultado).toBe(6.82)
    }) 
    it('Multiplicando um número negativo e outro positivo',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Multiplicar(-50,10)
        expect(resultado).toBe(-500)
    })
    it('Multiplicando dois números positivos grandes',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Multiplicar(2000000,2000000)
        expect(resultado).toBe(4000000000000)
    }) 
})

describe('Testando função divisão',()=>{
    it('Dividindo dois números positivos',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Dividir(4,2)
        expect(resultado).toBe(2)
    }) 
    it('Dividindo um numero com virgula ',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Dividir(4.0004,2)
        expect(resultado).toBe(2.0002)
    }) 
    it('Dividindo um número negativo e outro positivo',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Dividir(-50,10)
        expect(resultado).toBe(-5)
    })
    it('Dividindo dois números positivos grandes',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Dividir(20000000,20000000)
        expect(resultado).toBe(1)
    }) 
})

describe('Testando função potencia',()=>{
    it('Potencia de dois números positivos',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Potencia(4,2)
        expect(resultado).toBe(16)
    }) 
    it('Potencia de dois números positivos com vírgula',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Potencia(4.0004,2.0002)
        expect(resultado).toBe(16.007638124524800356860153251838)
    }) 
    it('Potencia de um número negativo e outro positivo',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Potencia(-50,3)
        expect(resultado).toBe(-125000)
    })
    it('Potencia de um numero com 0',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.Potencia(2000,0)
        expect(resultado).toBe(1)
    }) 
})

describe('Testando função raiz quadrada',()=>{
    it('Raiz quadrada de um inteiro pequeno',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.RaizQuadrada(4)
        expect(resultado).toBe(2)
    }) 
    it('Raiz quadrada de um numero com virgula',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.RaizQuadrada(4.84)
        expect(resultado).toBe(2.2)
    }) 
    it('Raiz quadrada de 0',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = ServiceCalculadora.RaizQuadrada(0)
        expect(resultado).toBe(0)
    }) 
})
