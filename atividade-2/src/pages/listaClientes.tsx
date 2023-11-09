import { Component } from "react";

export default class ListaCliente extends Component{
    render() {
        
        return (
            <div className="container">
                <h1 className="pb-4">Listagem de Clientes</h1>
                <table className="table table-hover">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Nome Social</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">CPF</th>
                            <th scope="col">RG</th>
                            <th scope="col">Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Gustavo Alves</td>
                            <td>Vulgo CR7</td>
                            <td>gustavinCR7@gmail.com</td>
                            <td>111.111.111-11</td>
                            <td>22.222.222-2</td>
                            <td>12 91234-5678</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Gustavo Henrique Abreu</td>
                            <td>Gu Bateman</td>
                            <td>gustavo.american.psycho@gmail.com</td>
                            <td>111.222.111-11</td>
                            <td>22.222.222-2</td>
                            <td>12 91234-5678</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ramon Dino</td>
                            <td>T-Rex</td>
                            <td>dino.bodybulding@gmail.com</td>
                            <td>111.222.333-11</td>
                            <td>22.222.222-2</td>
                            <td>12 91234-5678</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}