import { Conta } from "./conta"
import { Correntista } from "./correntista"

const joao = new Correntista('João', '123.456.789-00')

const contaJoao = new Conta('123-45', joao)
contaJoao.credita(100.0)
console.log(joao)