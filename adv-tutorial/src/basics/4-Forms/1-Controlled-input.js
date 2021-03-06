import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && age && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        lastName,
        age,
        email,
      };
      setUsers(() => {
        return [...users, person];
      });
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form-control">
            <label>FirstName : </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className="form-control">
            <label>LastName : </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div className="form-control">
            <label>Age : </label>
            <input
              type="text"
              name="age"
              value={age}
              id="age"
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </div>
          <div className="form-control">
            <label>Email : </label>
            <input
              type="email"
              name="email"
              value={email}
              id="firstName"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
        {users.map((user) => {
          const { id, firstName, lastName, email } = user;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <h4>{lastName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
