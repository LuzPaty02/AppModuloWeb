import React, { useState } from 'react';

function UpdateData() {
  const [idToUpdate, setIdToUpdate] = useState('');
  const [newName, setNewName] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8000/actualizar/${idToUpdate}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newName }),
      });
      if (response.status === 200) {
        console.log('Data updated successfully');
      } else {
        console.error('Failed to update data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="text" name="id" placeholder="ID a actualizar" onChange={(e) => setIdToUpdate(e.target.value)} />
      <input type="text" name="name" placeholder="Nuevo nombre" onChange={(e) => setNewName(e.target.value)} />
      <button onClick={handleUpdate}>Actualizar</button>
    </div>
  );
}

export default UpdateData;
