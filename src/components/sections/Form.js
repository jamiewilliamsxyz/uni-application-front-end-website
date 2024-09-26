import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: clamp(16rem, 55vw, 42rem);
  height: auto;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-top: 3.5rem;
  box-shadow: 0px 10px 10px rgba(253, 55, 40, 0.3);

  input, textarea{
    width: 100%;
    padding: 1rem;
    margin: 1rem 0rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: #d4d4d4;
    resize: none;
  }

  input, textarea:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 2rem #d4d4d4 inset;
    }

  ::placeholder {
    color: #141414;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
  }

  button {
    margin-top: 1rem;
    background: linear-gradient(to right, #C8102E, #FD3728 50%, #FF5722);
    box-shadow: 0 0 0.375rem 0.25rem rgba(252, 3, 3, 0.25);
    text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    color: white;
    width: 10rem;
    height: 3.75rem;
    font-weight: 500;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    border: none;
    padding: 1rem;
    cursor: pointer;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
  }

  button:hover {
    box-shadow: 0 0 0.375rem 0.25rem rgba(252, 3, 3, 0.35);
    transform: translateY(-2px);
  }

  button:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    alert(`Thank you ${name}, we will get back to you as soon as possible`);

    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

  return(
    <StyledForm onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" placeholder="Name" maxLength="50" minLength='1' required onChange={(e) => setName(e.target.value)} value={name}/>
        <input type="email" id="email" name="email" placeholder="Email" maxLength="100" minLength='3' required onChange={(e) => setEmail(e.target.value)} value={email}/>
        <textarea id="message" name="message" rows="12" cols="30" placeholder="Your Message" minLength='10' maxLength="500" required onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
        <button type='submit'>Send</button>
    </StyledForm>
  );
};

export default Form;