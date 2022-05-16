import './App.css';
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard"
import InventoryEdit from "./components/Dashboard/edit";
import AddInventory from "./components/Dashboard/create";
import DeleteInventory from "./components/Dashboard/delete";
import Warehouse from "./components/Warehouse";
import CreateWarehouse from "./components/Warehouse/create";
import AssignInventory from "./components/Warehouse/assign-inventory";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Dashboard />
            }
          />

          <Route
            exact
            path="/warehouses"
            element={
              <Warehouse />
            }
          />

          <Route
            exact
            path="/warehouse/add"
            element={
              <CreateWarehouse />
            }
          />

          <Route
            exact
            path="/warehouse/:id/assign-inventory"
            element={
              <AssignInventory />
            }
          />

          <Route
            path="/add-inventory"
            element={
              <AddInventory />
            }
          ></Route>

          <Route
            exact
            path="/inventory/:id/edit"
            element={
              <InventoryEdit />
            }
          ></Route>

          <Route
            exact
            path="/inventory/:id/delete"
            element={
              <DeleteInventory />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
