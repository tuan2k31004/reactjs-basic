import { useEffect, useState } from "react";

export default function FetchingData() {
  const [name, setName] = useState("Bob");
  const [bio, setBio] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setBio(true);
    },1000);
    return () => {
      setBio(false);
    };
  }, [name]);
  return (
    <>
      <select
        name=""
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
        <option value="Bob">Bob</option>
        <option value="Alice">Alice</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>{bio ? name : "Loading..."}</p>
    </>
  );
}
