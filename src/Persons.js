import database from './Backend'
const Persons=({person,setPersons,setNamesToShow})=>
{

    const handleDelete=(event)=>
    {
        console.log(event.target.id);
        const x=window.confirm('Do you want to delete')
        if(x)
        {
            database.remove(event.target.id)
                .then(response=>{
                    database.getAll()
                        .then(response=>{
                    // console.log(response);
                        setPersons(response)
                        setNamesToShow(response)
                        })
                })
        }
        
    }
    return(
        <p>{person.name} {person.number} <button id={person.id} onClick={handleDelete}>Delete</button></p>
    )
}
export default Persons;