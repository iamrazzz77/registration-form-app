import React from "react";
import { useState } from "react";
import "./App.css";

function App() {

    const [name, setName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("");

    const validateMe = (e) => {
        e.preventDefault();
        console.log("Form submitted!")
    }

  return (
    <div>
      <div style={{
        marginBottom:"40px",
      }}>
        </div>
    <div className="form-box" style={{
      display: "flex",
      flexDirection: "column", 
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#3333ff",
      height: "500px",
      
      border:"1px solid black",
      borderRadius:"10px",
      margin:"auto",
      width:"500px",
      padding:"20px",
    
    }}>

   
      <p className="title">Registration Form</p>

      <form className="App" onSubmit={validateMe} style={{
        display: "flex",
        flexDirection: "column",
        width:"400px",
      }}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name..." type="text" id="name" name="name" required/>
        <input value={regNo} onChange={e => setRegNo(e.target.value)} placeholder="Enter Your registration number..." type="number" id="regNumber" name="regNumber" required  />
        <input value={phoneNo} onChange={e => setPhoneNo(e.target.value)} placeholder="Enter your phone number..." type="number" id="phoneNumber" name="phoneNumber" required />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address..." type="email" id="email" name="email" required />
        <input type="date"/>
        <div className="genderField">
        <label for="male" style={{
            color:"white",
            textAlign:"left",
            marginLeft:"10px"
        }}>Gender: </label>
        <div className="genderBox">

        <input type="radio" name="gender" value="male"/><label style={{color:"white"}} >male</label>
        <input type="radio" name="gender" value="female"/><label style={{color:"white"}} >female</label>
        </div>

        </div>
       
    
        <button type="submit" style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            width: "97%",
            margin: "auto",
            marginTop: "10px",
            backgroundColor:"black",
            color:"white"

          }} >Submit</button>
        
      </form>
      </div>
    </div>
  );
}

export default App;