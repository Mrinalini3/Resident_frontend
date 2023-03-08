import React, { Component } from 'react';
import axios from 'axios';
import './form.css';
import { Link } from 'react-router-dom';


class Residentform extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      hname: '',
      sname: '',
      dob: '',
      oname: '',
      mail: '',
      mob:''
     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }); 
}
  
  handleSubmit(event) {
    event.preventDefault();
    const Data = {
      id: this.state.id,
      name: this.state.name,
      hname: this.state.hname,
      sname: this.state.sname,
      dob: this.state.dob,
      oname: this.state.oname,
     mail:this.state.mail,
     mob:this.state.mob
    };
    
    console.log(Data)
    axios.post('http://localhost:8080/addresident', Data)
      .then((response) => {
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      });

      alert("Resident Added");

  };
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Resident Details</h2>

        <input
          placeholder=' ID'
          type="text"
          name="id"
          
          onChange={this.handleChange}
        />
        
        <input
          placeholder='Name'
          type="text"
          name="name"
          
          onChange={this.handleChange}
        />
        <input
          placeholder='House_name'
          type="text"
          name="hname"
         
          onChange={this.handleChange}
        />
        <input
          placeholder='Street_name'
          type="text"
          name="sname"
       
          onChange={this.handleChange}
        />
         <input
          placeholder='DOB'
          type="text"
          name="dob"
       
          onChange={this.handleChange}
        />
        <input
          placeholder='Occupation'
          type="text"
          name="oname"
       
          onChange={this.handleChange}
        />
        <input
        placeholder='Mail'
        type="text"
        name="mail"
     
        onChange={this.handleChange}
      />
      <input
      placeholder='mob'
      type="text"
      name="mob"
   
      onChange={this.handleChange}
    />
      
       

         
        
       
                <button>ADD RESIDENT</button>
                <Link to="/getdetail"><button>Open directory</button></Link>
                            </form>
        );
    }
}
export default Residentform;