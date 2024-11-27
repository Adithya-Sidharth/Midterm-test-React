import React, { useState } from 'react'

function Form() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
  return (
    <>
        <form
        onSubmit={(e) => {e.preventDefault();
          alert(`Username: ${username}\nEmail: ${email}\nAddress: ${address}`);
        }}
      >

            <input type="text" placeholder='Enter username' onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder='Enter address' onChange={(e) => setAddress(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </>
  );
}

export default Form