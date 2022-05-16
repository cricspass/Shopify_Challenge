import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const DeleteInventory = props => {
    const params = useParams();
    const navigate = useNavigate();

    axios
        .delete("http://localhost:5000/api/inventory/" + params.id)
        .then(response => {
            console.log(response.data);
            navigate("/");
        })
        .catch(e => {
            console.log(e);
        });

    return "deeleted";
}

export default DeleteInventory;