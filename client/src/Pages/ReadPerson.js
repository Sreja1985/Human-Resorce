import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function ReadPerson() {
  let { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    email: "",
    department: "",
    phone: "",
    image: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/employee/${id}`).then((response) => {
      setEmployee({
        name: response.data.firstName + response.data.lastName,
        image: response.data.image,
        dob: response.data.dob,
        gender: response.data.gender.toUpperCase(),
        address: response.data.address,
        city: response.data.city,
        email: response.data.email,
        department: response.data.department,
        phone: response.data.phone,
      });
    });
  }, [id]);
  return (
    <main className="person__page">
      <section className="person__data">
        <article className="person__bio">
          <img alt={employee.name} src={employee.image} />
          <p>
            <strong>Person: </strong>
            {employee.name}
          </p>
          <p>
            <strong>DOB: </strong>
            {employee.dob}
          </p>
          <p>
            <strong>Gender: </strong>
            {employee.gender}
          </p>
        </article>

        <article className="person__status">
          <p>
            <strong>Department: </strong>
            {employee.department}
          </p>
          <p>
            <strong>Address: </strong>
            {employee.address}
          </p>
          <p>
            <strong>City: </strong>
            {employee.city}
          </p>
          <p>
            <strong>Email: </strong>
            {employee.email}
          </p>
          <p>
            <strong>Phone: </strong>
            {employee.phone}
          </p>
        </article>
      </section>
    </main>
  );
}

export default ReadPerson;
