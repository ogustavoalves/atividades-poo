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
      pets: [],
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
