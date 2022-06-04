import axios from 'axios'
const Persons=({person})=>
{

    const handleDelete=(event)=>
    {
        console.log(event.id);
    }
    return(
        <p>{person.name} {person.number} <button id={person.id} onClick={handleDelete}>Delete</button></p>
    )
}
export default Persons;