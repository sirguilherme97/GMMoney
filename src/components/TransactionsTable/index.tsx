import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable(){
    
    useEffect (() =>{
        api.get('transactions')
        .then(response => console.log(response.data))
    },[])

    return (
        <Container>
            <table>
                 <thead>
                     <tr>
                         <th>Título</th>
                         <th>Valor</th>
                         <th>Categoria</th>
                         <th>Data</th>
                     </tr>
                 </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Web Site</td>
                        <td className="deposit">R$ 5000,00</td>
                        <td>Desenvovimento React DOM</td>
                        <td>21/05/2021</td>
                    </tr>
                    <tr>
                        <td>Criação de Logomarca</td>
                        <td className="deposit">R$ 1000,00</td>
                        <td>Web Design</td>
                        <td>21/05/2021</td>
                    </tr>
                    <tr>
                        <td>Software em C++</td>
                        <td className="deposit">R$ 5000,00</td>
                        <td>Desenvovimento back-end</td>
                        <td>21/05/2021</td>
                    </tr>
                    <tr>
                        <td>API em NodeJS</td>
                        <td className="deposit">R$ 2500,00</td>
                        <td>Desenvovimento back-end</td>
                        <td>21/05/2021</td>
                    </tr>
                    <tr>
                        <td>Pagamento de Loja</td>
                        <td className="withdraw">- R$ 3000,00</td>
                        <td>Finanças</td>
                        <td>21/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}