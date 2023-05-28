import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Card from "../Components/Card";
import Searchbar from "../Components/Searchbar";
import { Link } from "react-router-dom";

function Home() {
  const [employee, setEmployee] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadEmployees = async () => {
      const response = await axios.get("http://localhost:3001/employee");
      setEmployee(response.data);
    };
    loadEmployees();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/employee/${id}`).then((response) => {
      setEmployee(
        employee.filter((deleteEmployee) => deleteEmployee.id !== id)
      );
    });
  };

  return (
    <section className="container">
      <Searchbar onChange={(e) => setSearch(e.target.value)} />
      <p className="newPerson">
        <Link to={"/new-person"} className="btn btn-primary pull-right">
          New person
        </Link>
      </p>
      <div className="list">
        {employee
          .filter(
            (employee) =>
              employee.firstName.toLowerCase().includes(search) ||
              employee.lastName.toLowerCase().includes(search) ||
              employee.department.toLowerCase().includes(search)
          )
          .map((employee) => {
            return (
              <Card
                key={employee.id}
                src={employee.image}
                alt={employee.alt}
                color={employee.gender}
                firstName={employee.firstName}
                lastName={employee.lastName}
                read={`/read-person/${employee.id}`}
                department={employee.department}
                url={`/edit-person/${employee.id}`}
                onClick={(e) => handleDelete(employee.id)}
              />
            );
          })}
      </div>
    </section>
  );
}

export default Home;
