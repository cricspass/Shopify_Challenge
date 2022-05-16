import React, { useState, useEffect, Component } from "react";
import { Form, Container, Button, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import Select from 'react-select';
import "bootstrap/dist/css/bootstrap.min.css";


function AssignInventory() {

    const [warehouses, setWarehouses] = useState([]);
    const [inventories, setInventories] = useState([]);

    const navigate = useNavigate();
    const params = useParams();


    useEffect(() => {
        loadInventories();
    }, [params.id]);

    const handleInputChange = event => {
        console.log(event.target.name);
        setWarehouses({ ...warehouses, [event.target.name]: event.target.checked });
    };

    const loadInventories = (e) => {
        axios
            .get(
                "http://localhost:5000/api/inventory"
            )
            .then((res) => {
                var filtered_inventories = res.data.data.filter((inventory)=>{
                    return (inventory.warehouse == null);
                });

                setInventories(filtered_inventories);
            })
            .catch((error) => {
                alert("Values entered wrong!!");
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(warehouses);

        axios
            .post("http://localhost:5000/api/warehouse/"+params.id+"/assign-inventory", warehouses)
            .then((res) => {
                navigate("/");
            })
            .catch((error) => {
                alert("Values entered wrong!!");
            });

    };

    return (
        <div className="container mt-4">
            <Row>
                <h2 style={{ fontFamily: "apple-system" }}><strong>Add House Review</strong></h2>
            </Row>
            <Form
                onSubmit={handleSubmit}
            >
                <div className="form ml-4 mt-3 mb-4 mr-4 p-3 border border-primary">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="form-group m-3 p-1">
                                <h3>Items</h3>
                                {inventories.length != 0 ? 
                                inventories.map((inventory) => (
                                    <div key={inventory._id} className="mb-3">
                                        <Form.Check
                                            type="checkbox"
                                            name={inventory._id}
                                            id={inventory._id}
                                            label={inventory.item_name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                ))
                            : <p>No inventories to assign</p>}
                                {}
                            </div>

                            <Button className="float-end m-3 px-3" onClick={handleSubmit} variant="success" >Submit</Button>

                        </div>
                    </div>
                </div>
            </Form>

        </div >
    );
}

export default AssignInventory;
