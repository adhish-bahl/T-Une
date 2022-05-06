import axios from "axios";

const instance = axios.create (
    {
        baseURL: "https://t-une.000webhostapp.com/",
    }
);

// instance.get("")

export default instance;
