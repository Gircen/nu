import Tabs from 'react-bootstrap/Tabs';
import '../tabs/css/MainTab.css'
import TableReq from "../table/TableInterdepartmentalRequests";
import Tab from "react-bootstrap/Tab";

function MainTab() {
    return (
            <Tabs
                className="my-container-center"
                defaultActiveKey="home"
                fill
            >
                <Tab eventKey="home" title="Home">
                    <TableReq />
                </Tab>
            </Tabs>
    );
}
export default MainTab;
