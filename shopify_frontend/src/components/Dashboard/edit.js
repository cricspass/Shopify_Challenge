import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

const EditInventory = () => {

    const initialReview = {
        _id: "",
        item_number: "",
        item_name: "",
        inventory_recieved: "",
        inventory_in_stock: "",
        inventory_shipped: ""
    };
    const [inventory, setInventory] = useState(initialReview);
    const navigate = useNavigate();
    const params = useParams();


    const getInventory = async id => {
        var inventory = await axios.get("http://localhost:5000/api/inventory/" + id);
        return inventory;
    };

    useEffect(() => {
        getInventory(params.id).then(response => {
            console.log(response);
            setInventory({
                id: response.data.data._id,
                item_number: response.data.data.item_number,
                item_name: response.data.data.item_name,
                inventory_recieved: response.data.data.inventory_recieved,
                inventory_in_stock: response.data.data.inventory_in_stock,
                inventory_shipped: response.data.data.inventory_shipped
            });
        });
    }, [params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setInventory({ ...inventory, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // var data = {
        //     item_number: inventory.item_number,
        //     item_name: inventory.item_name,
        //     inventory_recieved: inventory.inventory_recieved,
        //     inventory_in_stock: inventory.inventory_in_stock,
        //     inventory_shipped: inventory.inventory_shipped
        // };

        axios
            .put("http://localhost:5000/api/inventory/" + params.id, inventory)
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
                                    value={inventory.item_name}
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
                                    value={inventory.item_number}
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
                                    value={inventory.inventory_recieved}
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
                                    value={inventory.inventory_in_stock}
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
                                    value={inventory.inventory_shipped}
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

export default EditInventory;
