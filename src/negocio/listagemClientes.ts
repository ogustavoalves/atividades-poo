import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import Pet from "../modelo/pet";

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
            console.log(`CPF: ` + cliente.getCpf.getValor + `\n` + `Data de emissão: ` + cliente.getCpf.getDataEmissao);
            this.listarPets(cliente.getPets);
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
}



