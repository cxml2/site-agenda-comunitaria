import React from 'react';
import { Table } from 'react-bootstrap';

export default class Tabela extends React.Component {
    render() {
        return (
            <>
                <table class="table table-bordered table-light">
                    <thead>
                        <tr>
                            <th scope="col"><button onclick="popup()">ADICIONAR</button></th>
                            <th scope="col">Domingo</th>
                            <th scope="col">Segunda</th>
                            <th scope="col">Terça</th>
                            <th scope="col">Quarta</th>
                            <th scope="col">Quinta</th>
                            <th scope="col">Sexta</th>
                            <th scope="col">Sábado</th>

                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td id="primary" class="table-light"></td>
                            <td class="bg-primary">
                                <ul>
                                    <li><a href="/atividade/view/{{item._id}}"></a></li>
                                    <li><a href="/atividades/domingo/{{@key}}">...</a></li>
                                </ul>


                            </td>

                            <td class="bg-success">

                                <li><a href="/atividade/view/{{item._id}}"></a></li>

                                <a href="/atividades/segunda/{{@key}}">...</a>
                            </td>
                            <td class="bg-warning">

                                <li><a href="/atividade/view/{{item._id}}"></a></li>

                                <a href="/atividades/terca/{{@key}}">...</a>
                            </td>
                            <td class="bg-danger">

                                <li><a href="/atividade/view/{{item._id}}"></a></li>

                                <a href="/atividades/quarta/{{@key}}">...</a>

                            </td>
                            <td class="bg-info">

                                <li><a href="/atividade/view/{{item._id}}"></a></li>

                                <a href="/atividades/quinta/{{@key}}">...</a>
                            </td>
                            <td class="bg-primary">

                                <li><a href="/atividade/view/{{item._id}}"></a></li>

                                <a href="/atividades/sexta/{{@key}}">...</a>
                            </td>
                            <td class="bg-success">

                                <li><a href="/atividade/view/{{item._id}}"></a></li>

                                <a href="/atividades/sabado/{{@key}}">...</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}