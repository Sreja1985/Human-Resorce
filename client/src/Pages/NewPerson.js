import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewPerson() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    email: "",
    phone: "",
    department: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/employee", employee).then((response) => {
      alert("New Employee Added");
      navigate("/");
    });
  };

  return (
    <section className="container">
      <form className="formEmployee" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="Name"
            required
            onChange={(e) =>
              setEmployee({ ...employee, firstName: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Surname"
            required
            onChange={(e) =>
              setEmployee({ ...employee, lastName: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <select
            name="gender"
            className="form-select"
            placeholder="Gender"
            onChange={(e) =>
              setEmployee({ ...employee, gender: e.target.value })
            }
            required
          >
            <option selected>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            type="date"
            name="dob"
            className="form-control"
            required
            onChange={(e) => setEmployee({ ...employee, dob: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Address"
            required
            onChange={(e) =>
              setEmployee({ ...employee, address: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="city"
            className="form-control"
            placeholder="City"
            required
            onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            required
            onChange={(e) =>
              setEmployee({ ...employee, email: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Phone"
            required
            onChange={(e) =>
              setEmployee({ ...employee, phone: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <select
            name="department"
            className="form-select"
            placeholder="Department"
            onChange={(e) =>
              setEmployee({ ...employee, department: e.target.value })
            }
            required
          >
            <option selected>Select Department</option>
            <option value="IT Support">IT Support</option>
            <option value="Humane Resorce">Humane Resorce</option>
            <option value="Lawyer">Lawyer</option>
            <option value="Accountant">Accountant</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="image"
            className="form-control"
            placeholder="Image"
            required
            onChange={(e) =>
              setEmployee({ ...employee, image: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}

export default NewPerson;
