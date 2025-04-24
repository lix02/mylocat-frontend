import { useEffect, useState } from "react";
import { fetchContacts } from "../services/api";
import AddContactForm from "./AddContactForm";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");

  const loadContacts = () => {
    fetchContacts()
      .then(setContacts)
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div>
      <h2>Contact List</h2>
      <AddContactForm onContactAdded={loadContacts} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <strong>{contact.name}</strong> — {contact.phoneNumber}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
