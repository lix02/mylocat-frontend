const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchContacts() {
  const res = await fetch(`${API_BASE_URL}/contacts`);
  if (!res.ok) {
    throw new Error("Failed to fetch contacts");
  }
  return await res.json();
}

export async function addContact(newContact) {
  const res = await fetch(`${API_BASE_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newContact),
  });

  if (!res.ok) {
    throw new Error("Failed to add contact");
  }

  return await res.json();
}