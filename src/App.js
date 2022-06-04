import { useState , useEffect} from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import database from './Backend'

const App = () => {
  const [persons, setPersons] = useState([])


 
  const [namesToShow, setNamesToShow]=useState([])
  const [searchKeys,setSearchKeys]=useState('')


  useEffect(()=>{
    
     database.getAll()
     .then(response=>{
       console.log(response);
       setPersons(response)
       setNamesToShow(response)
     })
    
    
  },[])
  
  
//console.log(persons)
  

  const handleSearchKeys=(event)=>
  {
  //  console.log(event.target.value);
    let searchString=event.target.value;
    setSearchKeys(searchString)

    setNamesToShow(persons.filter(person=>person.name.toLowerCase().includes(searchString.toLowerCase())))
  }
 
  return(
    <div>
      <h1>My Phonebook</h1>
      <Filter searchKeys={searchKeys} handleSearchKeys={handleSearchKeys} />
      <h2>Add a new</h2>
      <PersonForm persons={persons}  setPersons={setPersons} setNamesToShow={setNamesToShow} />
      <h2>Numbers</h2>
      
      {namesToShow.map(person=><Persons key={person.id} person={person}/>)}
    </div>
  )
  
}

export default App