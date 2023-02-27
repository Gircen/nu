import Tab from 'react-bootstrap/Tab';
import TableReq from "../table/TableInterdepartmentalRequests";

function TabHome() {
    return (
            <Tab eventKey="home" title="Home">
                <TableReq />
            </Tab>

    );
}
export default TabHome;
