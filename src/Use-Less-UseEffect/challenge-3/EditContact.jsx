/* eslint-disable react/prop-types */

// This EditContact component receives a contact object shaped like { id, name, email } as the savedContact prop.
// Try editing the name and email input fields. When you press Save, the contact’s button above the form updates to
// the edited name.

// When you select a contact with the buttons at the top, the form resets to reflect that contact’s details.
// This is done with an Effect inside EditContact.js. Remove this Effect. Find another way to reset the
// form when savedContact.id changes.

import { useState } from "react";

export default function EditContact(props) {
  return <EditForm {...props} key={props.savedContact.id} />;
}

function EditForm({ savedContact, onSave }) {
  const [name, setName] = useState(savedContact.name);
  const [email, setEmail] = useState(savedContact.email);

  return (
    <section>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          const updatedData = {
            id: savedContact.id,
            name: name,
            email: email,
          };
          onSave(updatedData);
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          setName(savedContact.name);
          setEmail(savedContact.email);
        }}
      >
        Reset
      </button>
    </section>
  );
}
