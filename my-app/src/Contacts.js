import {useState} from 'react'
import './Contacts.css'
const Contacts = ()=> {
     const [contacts, setContacts] = useState([

     ])
     const [name, setName] = useState("")
     const [phone, setPhone] = useState("")

     // add new contact
     const handleAddContact = ()=>{
        const newContact = {
            id:Date.now(),
            name:name,
            phone:phone
        }
        setContacts([...contacts,newContact])
        setName("")
        setPhone("")
    }
    
    /* delete contact */
    const handleDeleteContact = (id)=>{
        setContacts(contacts.filter(i => i.id !== id))
    }

     return (
       <div className='container'>
            <h1>Contacts List</h1>
            {/* add new contact */}
            <div className='add-contact'>
                <input onChange={(e)=>setName(e.target.value)} value={name} type='text' placeholder='Enter Name' />
                <input onChange={(e)=>setPhone(e.target.value)} value={phone} type='text' placeholder='Enter Phone' />
                <button onClick={handleAddContact} className='add-btn'>Add new contact</button>

            </div>



            <div className='contacts-container'>
                    {contacts.map(contact=>{
                       return (
                            <div key={contact.id} className='contact-details'>
                                <div className='contact-info'>
                                    <p className='id'>id : # {contact.id}</p>
                                    <p>Name : {contact.name}</p>
                                    <p>phone : {contact.phone}</p>
                                </div>
                                {/* delete contact */}
                               <button onClick={()=>handleDeleteContact(contact.id)} className='delete-btn'>Delete</button>
                            </div>
                     )
            
                    })}
            </div>
       </div>
    )
}

export default Contacts

