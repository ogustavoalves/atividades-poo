import React, { Component } from "react";
import FormularioCadastroProduto from "./CadastroProduto"; // Certifique-se de importar o componente correto

interface Produto {
  id: number;
  nome: string;
  tipo: string;
  preco: string;
}

interface ListaProdutosState {
  produtos: Produto[];
}

export default class ListaProdutos extends Component<any, ListaProdutosState> {
  constructor(props: any) {
    super(props);
    this.state = {
      produtos: [],
    };
  }

  adicionarProduto = (novoProduto: Produto) => {
    this.setState((prevState) => ({
      produtos: [...prevState.produtos, novoProduto],
    }));
  };

  render() {
    const { produtos } = this.state;

    return (
      <div className="container">
        <FormularioCadastroProduto onSubmit={this.adicionarProduto} />
        <h1 className="pb-4">Listagem de Produtos</h1>
        <table className="table table-hover">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Tipo</th>
              <th scope="col">Preço</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.tipo}</td>
                <td>{produto.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
