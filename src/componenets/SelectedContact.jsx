import React, { useState, useEffect } from 'react';

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users'
        );
        const data = await response.json();
        setContacts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, [selectedContactId]);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    const contact = contacts.find(
      (contact) => contact.id === selectedContactId || 1
    );
    console.log(contact);
    return (
      <>
        <table>
          <thead>
            <tr>
              <th colSpan="3">{contact.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Username: </td>
              <td colSpan="2">{contact.username}</td>
            </tr>
            <tr>
              <td>Email: </td>
              <td colSpan="2">{contact.email}</td>
            </tr>
            <tr>
              <td>Phone: </td>
              <td colSpan="2">{contact.phone}</td>
            </tr>
            <tr>
              <td>Website: </td>
              <td colSpan="2">{contact.website}</td>
            </tr>
            <tr>
              <td>Address: </td>
              <td colSpan="2">{contact.address.street}</td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="2">{contact.address.suite}</td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="2">{contact.address.city}</td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="2">{contact.address.zipcode}</td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="2">{contact.address.geo.lat}</td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="2">{contact.address.geo.lng}</td>
            </tr>
            <tr>
              <td>Company: </td>
              <td colSpan="2">{contact.company.name}</td>
            </tr>
            <tr>
              <td>Catch Phrase</td>
              <td colSpan="2">{contact.company.catchPhrase}</td>
            </tr>
            <tr>
              <td>BS</td>
              <td colSpan="2">{contact.company.bs}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => setSelectedContactId(null)}>Back</button>
      </>
    );
  }
}
