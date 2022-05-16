import React, { useState, useEffect } from "react";
import { Table, Container, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs';

function Dashboard() {

    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadInventories();
    }, []);

    const loadInventories = (e) => {
        axios
            .get(
                "http://localhost:5000/api/inventory"
            )
            .then((res) => {
                setInventories(res.data.data);
            })
            .catch((error) => {
                alert("Values entered wrong!!");
            });
    };

    return (
        <div className="Dashboard">
            <Container fluid style={{ padding: "20px", }}>
                <div style={{ margin: "40px" }}>
                    <Row className="my-1">
                        <div className="col-lg-12">
                            <Button className="New Inventory float-end" variant="success" onClick={() => navigate("/add-inventory")}>Add New</Button>
                        </div>
                    </Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Item Number</th>
                                <th>Item Name</th>
                                <th>Inventory Recieved</th>
                                <th>Inventory In Stock </th>
                                <th>Inventory Shipped </th>
                                <th>Warehouse </th>
                                <th>Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventories.map((inventory, index) => {
                                return (
                                    <tr
                                        key={index}
                                    // onClick={() => handleClick(inventory)}
                                    >
                                        <td>{inventory.item_number}</td>
                                        <td>{inventory.item_name}</td>
                                        <td>{inventory.inventory_recieved}</td>
                                        <td>{inventory.inventory_in_stock}</td>
                                        <td>{inventory.inventory_shipped}</td>
                                        {inventory.warehouse ? (
                                            <td>{inventory.warehouse.name}</td>
                                        ) : <td>-</td>}
                                        <td>
                                            <Button onClick={() => navigate("/inventory/" + inventory._id + "/edit")} size="sm" variant="primary"><BsPencilSquare /></Button>{' '}
                                            <Button onClick={() => navigate("/inventory/" + inventory._id + "/delete")} size="sm" variant="danger"><BsFillTrashFill /></Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
}

export default Dashboard;
