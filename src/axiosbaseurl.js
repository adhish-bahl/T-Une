import axios from "axios";

const instance = axios.create (
    {
        baseURL: "http://localhost/DBMS%20Project/",
    }
);

// instance.get("")

export default instance;
