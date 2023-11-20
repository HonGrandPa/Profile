import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [focus, setFocus] = useState(false);
  const [id, setID] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        setLoading(false);
        setInput({
          name: "",
          email: "",
          message: ""
        })
      }, (error) => {
        setLoading(false);
        setError(error);
      });
  };


  //store the input
  const handleInput = (e) => {
    setInput({
      ...input,
      [id]: e.target.value
    })
    setID(e.target.id)
  }

  const handleFocus = (e) => {
    setID(e.target.id)
    setFocus(!focus)
  }



  return (

    <section id='contactsection'>
      <hr className="mx-auto w-7/12 border-slate-800/40" />
      <div className='flex flex-col items-center my-5 gap-0.5'>
        <p className='text-[8px] font-[300] uppercase'>Get In Touch</p>
        <h1 className='text-3xl '>Contact Me</h1>
      </div>
      <form ref={form} className='select-none' onSubmit={sendEmail} >
        <div className='flex flex-col mx-auto sm:max-w-xl w-11/12 gap-5 mb-10 border-[1px] bg-[#E4E4D0]/40 border-black/40 p-5 rounded-xl'>
          <div className='relative'>
            <input required autoComplete="off" type='text' name='user_name' id='name' onBlur={handleFocus} onFocus={handleFocus} value={input.name} onChange={handleInput} className=" text-[14px] bg-[#E4E4D0]/40 border-[1.8px] border-black/20  w-full px-1.5 h-11 rounded-xl outline-none" />
            <label className={`text-[12px] absolute top-3 left-2 duration-300 ${(input.name !== "") || (focus === true && id === 'name') ? 'translate-x-2 -translate-y-[1.6rem] text-[9px]' : ""}`}>Name</label>
          </div>
          <div className='relative'>
            <input required autoComplete="off" type='email' name='user_email' id='email' onBlur={handleFocus} onFocus={handleFocus} value={input.email} onChange={handleInput} className="text-[14px] bg-[#E4E4D0]/40 border-[1.8px] border-black/20 w-full px-1.5 h-11 rounded-xl outline-none" />
            <label className={`text-[12px] absolute top-3 left-2 duration-300 ${(input.email !== "") || (focus === true && id === 'email') ? 'translate-x-2 -translate-y-[1.6rem] text-[9px]' : ""}`}>Email</label>
          </div>
          <div className='relative'>
            <textarea required autoComplete="off" type='text' name='message' id='message' onBlur={handleFocus} onFocus={handleFocus} value={input.message} onChange={handleInput} className="text-[14px] bg-[#E4E4D0]/40 border-[1.8px] border-black/20  w-full p-1 h-48 rounded-xl outline-none" />
            <label className={`text-[12px] absolute top-2 left-2 duration-300 ${(input.message !== "") || (focus === true && id === 'message') ? 'translate-x-2.5 -translate-y-6 text-[9px]' : ""}`}>Message</label>
          </div>
          {loading && error === null ?
          <button disabled className='bg-[#9EB384]/50 border-[1.8px] border-black/20 disabled:bg-gray-600/10  h-9 rounded-xl uppercase hover:opacity-75 active:shadow-md'>Sending</button> :
          <button  className='bg-[#9EB384]/40 border-[1.8px] border-black/20  h-9 rounded-xl duration-200 uppercase hover:bg-gray-200/10 active:shadow-md'>Submit</button>}

          {error ?
            <div className='flex flex-col items-center text-red-600 font-semibold'>
              <p>My Apology, This Email Cannot be Delivered Successfully </p>
              <p>due to {error}</p>
            </div> : <></>}
            
        </div>
      </form>
    </section>
  )
}

export default Contact

