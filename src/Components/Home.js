import React from "react";
import { Button, Table } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import usersData from "./Data";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  let history = useNavigate();
  function setId(){

  }
  function setDelete(id){
    let index = usersData.map((e)=>{
      return e.id;
    }).indexOf(id);
    usersData.splice(index,1);
    history("/");
  }
  return (
    <div style={{textAlign:"center",marginLeft:"50px",marginRight:"50px",marginTop:"100px"}}>
      <h1 style={{marginBottom:"30px"}}>CRUD Application</h1>
      <Table table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th colSpan={5}>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.mobileNumber}</td>
                <td>
                  <Link to={'/edit'} onClick={(e)=>{setId(item.id,item.name,item.age,item.email,item.mobileNumber)}}>
                    <Button variant="warning">Update</Button>
                  </Link>
                </td>
                <td>
                  <Button variant="danger" onClick={(e)=>{setDelete(item.id)}}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link to={'/create'} className="d-grid">
          <Button varient="primary">Create Data</Button>
      </Link>
    </div>
  );
}
