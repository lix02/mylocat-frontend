import { useState } from "react";
import { addContact } from "../services/api";

export default function AddContactForm({ onContactAdded }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addContact({ name, phoneNumber });
      setName("");
      setPhoneNumber("");
      onContactAdded(); // refresh list
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <h3>Add New Contact</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
}
