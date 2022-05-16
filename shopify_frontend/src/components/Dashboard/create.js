import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddInventory = () => {

    const [inventory, setInventory] = useState();
    const navigate = useNavigate();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setInventory({ ...inventory, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        var data = {
            item_number: inventory.item_number,
            item_name: inventory.item_name,
            inventory_recieved: inventory.inventory_recieved,
            inventory_in_stock: inventory.inventory_in_stock,
            inventory_shipped: inventory.inventory_shipped
        };

        axios
            .post("http://localhost:5000/api/inventory", data)
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
            <Form onSubmit={handleSubmit}>
                <div className="form ml-4 mt-3 mb-4 mr-4 p-3 border border-primary">

                    <div className="row">

                        <div className="col-lg-12">
                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="title">Item name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="item_name"
                                    required
                                    // value={house.title}
                                    name="item_name"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="description">Item Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="item_number"
                                    required
                                    // value={house.description}
                                    name="item_number"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="description">Inventory Recieved</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="inventory_recieved"
                                    required
                                    // value={house.description}
                                    name="inventory_recieved"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="description">Inventory In Stock</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="inventory_in_stock"
                                    required
                                    // value={house.description}
                                    name="inventory_in_stock"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="description">Inventory Shipped</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="inventory_shipped"
                                    required
                                    // value={house.description}
                                    name="inventory_shipped"
                                    onChange={handleInputChange}
                                />
                            </div>




                            <Button className="float-end m-3 px-3" onClick={handleSubmit} variant="success" >Submit</Button>

                        </div>
                    </div>
                </div>
            </Form>
        </div >
    );
}

export default AddInventory;
