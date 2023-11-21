import React, { Component } from "react";
import FormularioCadastroPet from "./CadastroPets"; // Certifique-se de importar o componente correto

interface Pet {
  id: number;
  nome: string;
  raca: string;
  tipo: string;
  genero: string;
  dono: string;
}

interface ListaPetsState {
  pets: Pet[];
}

export default class ListaPets extends Component<any, ListaPetsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      pets: [
        {
          id: 1,
          nome: "Jorge Henrique",
          raca: "Yorkshire",
          tipo: "Cachorro",
          genero: "Macho",
          dono: "O Alves",
        },
        {
          id: 2,
          nome: "Ollie",
          raca: "Bulldog",
          tipo: "Cachorro",
          genero: "Fêmea",
          dono: "Rammon Dino",
        },
        {
          id: 3,
          nome: "Flocky",
          raca: "Laranja",
          tipo: "Gato",
          genero: "Macho",
          dono: "Gustavo Bateman",
        },
      ],
    };
  }

  adicionarPet = (novoPet: Pet) => {
    this.setState((prevState) => ({
      pets: [...prevState.pets, novoPet],
    }));
  };

  render() {
    const { pets } = this.state;

    return (
      <div className="container">
        <FormularioCadastroPet onSubmit={this.adicionarPet} />
        <h1 className="pb-4">Listagem de Pets</h1>
        <table className="table table-hover">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Raça</th>
              <th scope="col">Tipo</th>
              <th scope="col">Gênero</th>
              <th scope="col">Dono</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr key={pet.id}>
                <td>{pet.id}</td>
                <td>{pet.nome}</td>
                <td>{pet.raca}</td>
                <td>{pet.tipo}</td>
                <td>{pet.genero}</td>
                <td>{pet.dono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
