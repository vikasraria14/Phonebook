import database from './Backend'
import { useState } from "react"
const PersonForm=({persons,setPersons,setNamesToShow})=>
{
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange=(event)=>
  {
   // console.log(event.target.value);
    setNewName(event.target.value)
  }


  const handleNumberChange=(event)=>
  {
  //  console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  const submitFunction=(event)=>
  {
    event.preventDefault();
    //console.log("Hello")
    const newNameObj={
      name:newName,
      number:newNumber
    }
    const x= persons.findIndex(person=>person.name===newNameObj.name)
   // console.log(x)
    if(x!==-1)
    {
      console.log(x)
      
     
      const z=window.confirm(`Do you want to edit ${newNameObj.name}`)
      if(z)
      {
        const per=persons.find(person=>{return person.name===newNameObj.name});
        database.update(per.id,newNameObj)
        .then(
          database.getAll()
          .then(response=>{
      // console.log(response);
          setPersons(response)
          setNamesToShow(response)
          })
        )
      }
    }
    else
    {
        database.create(newNameObj)
        .then(response=>{
            setNamesToShow(persons.concat(response))
            setPersons(persons.concat(response))
            console.log(response);
        })      
    }
    setNewName('');
    setNewNumber('');
   // setSearchKeys('');
    
  }

    return(
        <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit" onClick={submitFunction}>add</button>
        </div>
      </form>

    )
}
export default PersonForm;