import axios  from 'axios';
import React, { useState } from 'react'

const Contact = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [message , setMessage] = useState("");
    const [responseMessage, setResponseMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, email, message};

        axios
            .post("https://getform.io/f/lajknyvb", data)
            .then(() => {
                setResponseMessage('Form submitted successfully!');
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                setResponseMessage('There was an error submitting the form.');
                console.log(error);
            })
    }



    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] '> {/*Background*/}
            <div className='flex flex-col justify-center items-center h-full text-center'> {/*Container*/}
                <div>
                    <p className='inline text-gray-400 font-bold text-4xl border-b-4 border-[#CD0000]'>Contact</p>
                    <p className='text-slate-50 py-3'>Submit the form below</p>
                </div>
                <form  onSubmit={handleSubmit} className='flex flex-col max-w-[800px] w-[50%] ' >
                    <input name='name' type="text" placeholder="Name" className="bg-gray-300 px-3 py-2" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input name='email' type="email" placeholder="Email" className="bg-gray-300 my-5 px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <textarea name='message' placeholder="Message" rows="5" cols="50" className="bg-gray-300 px-3 py-2" value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <button type='submit' className='flex justify-center w-20  py-2 my-5 text-slate-50 border-2  hover:bg-[#CD0000] duration-300 ease-in hover:border-[#CD0000]' >Send </button>
                </form>
                <p className='text-gray-400'>{responseMessage}</p>
            </div>
        </div> 
    )
}

export default Contact