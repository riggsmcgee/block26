import { useState } from 'react';
import ContactList from './componenets/ContactList';
import UserData from './componenets/UserData';
import './App.css';
import SelectedContact from './componenets/SelectedContact';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  console.log(UserData());
  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
