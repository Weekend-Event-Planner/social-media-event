import React, {useState, useEffect} from "react";
import styles from './Homepage.scss'
import Button from 'react-bootstrap/Button';
import Chatbox from '../Chatbox/Chatbox.js';

import { Link } from "react-router-dom";
export const Homepage = () => {

  const [chatMessage, setChatMessage] = useState('');
  const [userInput, setUserInput] = useState('');
  // make a get request to chatgbt to display response. 

  // const buttonHandler = () => {
  //   console.log('buttonHandle activated')
  //   // useEffect(() => {
  //     fetch('http://localhost:3000/api', {
  //       method: "GET",
  //       headers: {'Content-Type': 'application/json'}
  //     }) 
  //       .then((data) => data.json())
  //       .then((data) => {
  //         console.log('MEEOWWW', data);
  //         setChatMessage(data[0].messages);
  //         console.log('MEOWW2', chatMessage);
  //       }).catch((err) => {
  //         console.log(err, 'error on the fetch get request')
  //       })
  //   // }, [])
  // }

  //handle submissions to the database from input field
  const submitHandler = (e) => {
    e.preventDefault()
    fetch(('URL'), {
      method: "POST",
      body: JSON.stringify(),// data we submit, 
      headers: {
        'Content-type': 'application/json',
      }
    }).then((res) => res.json())
      .then((data) => {
        data.messages; // need to match the schema field that is storing the user's responses? 
      }).catch((err) => {
        console.log(err)
      });
  }
  
  return (
    <div>
      <div className="h1-container"><h2>Need Weekend Plans?</h2></div>
      {/* <div className="generate-button-container">
        <Button onClick={ (e)=> buttonHandler(e) } className="generate-button" size="lg" variant="warning">Generate Event Ideas</Button>{' '}
      </div> */}
      <Chatbox />
      <div className="swag">{chatMessage}</div>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-content">
        <input onClick={(e) => setUserInput(e.target.value)} type="text" className="input-box" placeholder="Your Idea"></input>
          <Button type="submit" variant="primary">Submit</Button>{' '}
        </div>
        <div className="redirect-idea-container">
          <Link to="/idea">
            <Button variant="info">See All Ideas</Button>{' '}
          </Link></div>
      </form>
    </div >
  )
}