import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateWarehouse = () => {

    const [warehouse, setWarehouse] = useState();
    const navigate = useNavigate();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setWarehouse({ ...warehouse, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:5000/api/warehouse", warehouse)
            .then((res) => {
                navigate("/warehouses");
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
                                <label className="mb-1" htmlFor="title">Warehouse name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    required
                                    name="name"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="description">Warehouse capacity</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="capacity"
                                    required
                                    // value={house.description}
                                    name="capacity"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="description">Warehouse capacity unit</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="capacity_unit"
                                    required
                                    // value={house.description}
                                    name="capacity_unit"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="description">Longitude</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="longitude"
                                    required
                                    // value={house.description}
                                    name="longitude"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="description">Latitude</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="latitude"
                                    required
                                    // value={house.description}
                                    name="latitude"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="description">Street</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="street"
                                    required
                                    // value={house.description}
                                    name="street"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="description">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    required
                                    // value={house.description}
                                    name="city"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="description">Province</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="province"
                                    required
                                    // value={house.description}
                                    name="province"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group m-3 p-1">
                                <label className="mb-1" htmlFor="description">Country</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="country"
                                    required
                                    // value={house.description}
                                    name="country"
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

export default CreateWarehouse;
