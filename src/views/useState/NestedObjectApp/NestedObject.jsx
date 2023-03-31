import { useState } from "react";

export default function NestedObject() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/S1AgUOm.jpg",
    },
  });
  return (
    <div>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          value={person.name}
          onChange={(e) => {
            setPerson({ ...person, name: e.target.value });
          }}
        />
      </label>
      <br />
      <label htmlFor="title">
        Title:
        <input
          type="text"
          id="title"
          value={person.artwork.title}
          onChange={(e) => {
            setPerson({
              ...person,
              artwork: { ...person.artwork, title: e.target.value },
            });
          }}
        />
      </label>
      <br />
      <label htmlFor="city">
        City:
        <input
          type="text"
          id="city"
          value={person.artwork.city}
          onChange={(e) => {
            setPerson({
              ...person,
              artwork: { ...person.artwork, city: e.target.value },
            });
          }}
        />
      </label>
      <br />
      <label htmlFor="image">
        Image:
        <input
          type="text"
          id="image"
          value={person.artwork.image}
          onChange={(e) => {
            setPerson({
              ...person,
              artwork: { ...person.artwork, image: e.target.value },
            });
          }}
        />
      </label>
      <p>
        {person.artwork.title} by {person.name}
      </p>
      <p>(located in {person.artwork.city})</p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </div>
  );
}
