const express=require('express')
const morgan = require('morgan')
const cors = require('cors')
const app=express();



app.use(express.json())
app.use(cors())
app.use(express.static('build'))

//app.use(morgan("tiny"));

morgan.token('body', req => {
    return JSON.stringify(req.body)
  })
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
 // app.use(morgan(' :body'))
let persons=[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons',(req,res)=>{
    res.json(persons);
})
app.get('/info',(req,res)=>
{
    
    res.end(`Phonebook has info for ${persons.length} contacts`)
    console.log('hello')
})

app.get('/api/persons/:id',(req,res)=>{
    const id=Number(req.params.id)
    
    const person=persons.find(perso=>perso.id===id)
    if(person)
    res.json(person);
    else
    res.end('404 Not Found')
})
app.delete('/api/persons/:id',(req,res)=>
{
    const id=Number(req.params.id)
    persons=persons.filter(person=>person.id!==id);
    res.status(204).end();
})

app.post('/api/persons',(req,res)=>
{
     
    if(!req.body.name||!req.body.number)
    {
        res.status(400).end("Name or Number missing")
    }
    else if(persons.find(person=>person.name===req.body.name))
    {
        res.status(400).end("Name already exists");
    }
    else
    {
        const person={id:Math.floor(Math.random()*1000000), ...req.body};

    
        persons=persons.concat(person)
        console.log(persons);
        res.status(200).json(person);
    }
    
})

const PORT = process.env.PORT || 3002;

app.listen(PORT,()=>
{
    console.log('App is running');
})