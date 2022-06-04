import axios from "axios"


const baseUrl = '/api/persons'

const getAll=()=>{
    const promise=axios.get(baseUrl)
    return promise.then(response=>response.data);
}
const create=(obj)=>{
    const promise=axios.post(baseUrl,obj)
    return promise.then(response=>response.data)
}
const update=(id,newNameObj)=>{
    const url=baseUrl+'/'+id;
    const promise=axios.put(url,newNameObj);
    return promise.then(response=>response.data)
}
const remove=(id)=>{
    const url=baseUrl+'/'+id;
    const promise=axios.delete(url)
    return promise.then(response=>response.data)
}
const x={getAll,create,update,remove}
export default x;