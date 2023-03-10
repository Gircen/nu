import Table from 'react-bootstrap/Table';

function TableReq() {
    return (
        <Table id="MainTable" striped bordered="true" hover variant="white">
            <thead>
            <tr>
                <th>№</th>
                <th>Вид запроса</th>
                <th>Наименование запроса</th>
                <th>Дата создания запроса</th>
                <th>Ответственный за запрос</th>
            </tr>
            </thead>
            <tbody>
            </tbody>

        </Table>
    );
}

export default TableReq;
