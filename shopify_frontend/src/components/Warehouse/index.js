import React, { useState, useEffect } from "react";
import { Table, Container, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";
import { BsPlusCircleFill } from 'react-icons/bs';

function Warehouse() {

    const [warehouses, setWarehouses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadWarehouses();
    }, []);

    const loadWarehouses = (e) => {
        axios
            .get(
                "http://localhost:5000/api/warehouse"
            )
            .then((res) => {
                setWarehouses(res.data.data);
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
                            <Button className="New Inventory float-end" variant="success" onClick={() => navigate("/warehouse/add")}>Add New</Button>
                        </div>
                    </Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>Address </th>
                                <th>Capacity</th>
                                <th>Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {warehouses.map((warehouse, index) => {
                                return (
                                    <tr
                                        key={index}
                                    >
                                        <td>{warehouse.name}</td>
                                        <td>{warehouse.longitude}</td>
                                        <td>{warehouse.latitude}</td>
                                        <td>{warehouse.address.street}, {warehouse.address.city}, {warehouse.address.province}, {warehouse.address.country}</td>
                                        <td>{warehouse.capacity} {warehouse.capacity_unit} </td>
                                        <td>
                                            <Button onClick={() => navigate("/warehouse/" + warehouse._id + "/assign-inventory")} size="sm" variant="primary"><BsPlusCircleFill /> Assign Inventory</Button>{' '}
                                        </td>

                                        {/* {inventory.warehouse ? (
                                            <td>{inventory.warehouse.name}</td>
                                        ) : <td>-</td>} */}
                                        
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

export default Warehouse;
