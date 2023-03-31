import { useState } from "react";

export default function Object() {
  const [info, setInfo] = useState({
    firstName: "Vũ Đăng",
    lastName: "Tuấn",
    email: "vudangtuan10042003@gmail.com",
  });
  return (
    <div>
      <label htmlFor="first name">
        First name: 
        <input
          type="text"
          name="first name"
          id="first name"
          onChange={(e) => {
            setInfo({ ...info, firstName: e.target.value });
          }}
          value={info.firstName}
        />
      </label>
      <br/>
      <label htmlFor="last name">
        Last name: 
        <input
          type="text"
          name="last name"
          id="last name"
          value={info.lastName}
          onChange={(e) => {
            setInfo({ ...info, lastName: e.target.value });
          }}
        />
      </label>
      <br/>
      <label htmlFor="email">
        Email: 
        <input
          type="email"
          name="email"
          id="email"
          value={info.email}
          onChange={(e) => {
            setInfo({ ...info, email: e.target.value });
          }}
        />
      </label>
      <p>{info.firstName + " " + info.lastName + " (" + info.email + ")"}</p>
    </div>
  );
}
