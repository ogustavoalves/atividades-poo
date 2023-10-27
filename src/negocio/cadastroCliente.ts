import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Cadastro from "./cadastro"
import Pet from "../modelo/pet"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);


        let pets: Pet[] = []
        let inputPet: string | boolean = true;
        while(inputPet) {
            
            let nomePet = this.entrada.receberTexto(`Informe o nome do pet: `);
            let tipoPet = this.entrada.receberTexto(`Informe o tipo do pet: `);
            let generoPet = this.entrada.receberTexto(`Informe o gênero do pet (M/F): `);
            let racaPet = this.entrada.receberTexto(`Informe a raça do pet: `);
            pets.push(new Pet(nomePet, tipoPet, generoPet, racaPet));

            inputPet = this.entrada.receberTexto(`Cadastrar outro pet? (S/N)`);
            if (inputPet === "S" || inputPet === "s") {
                inputPet = true
            } else if (inputPet === "N" || inputPet === "n") {
                inputPet = false
            } else {
                console.log(`Opção inválida`)
                inputPet = this.entrada.receberTexto(`Cadastrar outro pet? (S/N)`)
            }
        }

        let cliente = new Cliente(nome, nomeSocial, cpf, pets);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}