export default function ContactRow({ contact, setSelectedContactId }) {
  return (
    <tr
      className="contact-row"
      onClick={() => {
        console.log('Its working');
        setSelectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
