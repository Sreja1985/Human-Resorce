import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditPerson() {
  const navigate = useNavigate();
  const { id } = useParams();

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

  useEffect(() => {
    const loadEmployee = async () => {
      const response = await axios.get(`http://localhost:3001/employee/${id}`);
      setEmployee(response.data);
    };
    loadEmployee();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/employee/${id}`, employee)
      .then((response) => {
        alert("Employee updated");
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
            required
            defaultValue={employee.firstName}
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
            required
            defaultValue={employee.lastName}
            onChange={(e) =>
              setEmployee({ ...employee, lastName: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <select
            name="gender"
            className="form-select"
            defaultValue={employee.gender}
            onChange={(e) =>
              setEmployee({ ...employee, gender: e.target.value })
            }
            required
          >
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
            defaultValue={employee.dob}
            onChange={(e) => setEmployee({ ...employee, dob: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="address"
            className="form-control"
            required
            defaultValue={employee.address}
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
            required
            defaultValue={employee.city}
            onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            required
            defaultValue={employee.email}
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
            required
            defaultValue={employee.phone}
            onChange={(e) =>
              setEmployee({ ...employee, phone: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <select
            name="department"
            className="form-select"
            defaultValue={employee.department}
            onChange={(e) =>
              setEmployee({ ...employee, department: e.target.value })
            }
            required
          >
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
            required
            defaultValue={employee.image}
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

export default EditPerson;
