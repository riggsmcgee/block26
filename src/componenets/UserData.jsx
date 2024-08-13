import { useEffect, useState, Suspense } from 'react';

export default function UserData() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users'
        );
        const data = await response.json();
        setContacts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);
  console.log(contacts);
}
