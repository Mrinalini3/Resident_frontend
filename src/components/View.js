import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
//import './View.css';

export default function Table1() {
    const [data, setData] = useState([]);

    async function init() {
        let res = await axios.get('http://localhost:8080/getResident');
        let dat = res.data;
        setData(dat);
        
    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:8080/delete/${id}`)
            .then((response) => {
                const newdata = data.filter((item) => item.id !== id);
                setData(newdata);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const updateData = (id, newData) => {
        axios.put(`http://localhost:8080/update/${id}`, newData)
          .then((response) => {
            const newdata = data.map((item) => {
              if (item.id === id) {
                return { ...item, ...newData };
              }
              return item;
            });
            setData(newdata);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    useEffect(() => { init() }, [])
    return (
        <div className="body1">
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>House_name</th>
                    <th>Street_name</th>
                    <th>DOB</th>
                    <th>Occupation</th>
                    <th>Mail</th>
                    <th>Mobile</th>
                    
                </tr>
            </thead>
            <tbody>
                {data.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.hname}</td>
                        <td>{user.sname}</td>
                        <td>{user.dob}</td>
                        <td>{user.oname}</td>
                        <td>{user.mail}</td>
                        <td>{user.mob}</td>
                        
                        <td>
                            <button
                                className="btn btn-primary"
                                onClick={() => deleteData(user.id)}
                            >
                                Delete
                            </button>
                        </td>
                        <td>
  <button
    className="btn btn-secondary"
    onClick={() => {
      
    
      const newData2 = prompt("Enter name");
      if(newData2){
        updateData(user.id,{name:newData2});
      }
      
      
      

     
      
      
    }}>
    Update
  </button>
</td>
                    </tr>

                ))}
            </tbody>
        </table>
        </div>
    );
}
