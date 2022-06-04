import axios from "axios"

const url='http://localhost:3002/api/persons';
const baseUrl = '/api/persons'

const getAll=()=>{
    const promise=axios.get(baseUrl)
    return promise.then(response=>response.data);
}
const create=(obj)=>{
    const promise=axios.post(baseUrl,obj)
    return promise.then(response=>response.data)
}
const update=()=>{}
const remove=()=>{}

export default {getAll,create,update,remove};