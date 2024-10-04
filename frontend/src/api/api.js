import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333"
});

export function fetcher(input){
    return api.get(input).then(response => response.data)
}