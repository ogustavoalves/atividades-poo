import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import Pet from "../modelo/pet";
import Telefone from "../modelo/telefone";
import RG from "../modelo/rg";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF\n` + `Número: ` + cliente.getCpf.getValor + `     Data de emissão: ` + cliente.getCpf.getDataEmissao);
            this.listarPets(cliente.getPets);
            this.listarTelefones(cliente.getTelefones);
            console.log(`Data de Cadastro: ` + cliente.getDataCadastro);
            this.listarRgs(cliente.getRgs);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }


    private listarPets(pets : Array<Pet>) {
        if(pets) {
            console.log(`Pets: `)
            pets.forEach(pet => {
                if(pet){
                    console.log(`Nome: ` + pet.getNome + '  Tipo: ' + pet.getTipo + `  Genero: ` + pet.getGenero + '  Raça: ' + pet.getRaca)
                }
            });
        }
    }

    private listarRgs(rgs : Array<RG>) {
        if(rgs) {
            console.log(`RGs: `)
            rgs.forEach(rg => {
                if(rg){
                    console.log(`Número: ` + rg.getValor + '  Data emissão: ' + rg.getDataEmissao)
                }
            });
        }
    }

    private listarTelefones(telefones : Array<Telefone>) {
        if (telefones){
            console.log(`Telefones: `)
            telefones.forEach(telefone => {
                if(telefone){
                    console.log(telefone.getDdd + ' ' + telefone.getNumero)
                } 
            });
        }
    }

    

}



