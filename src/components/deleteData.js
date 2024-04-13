import React, { useState } from 'react';

function DeleteData() {
  const [idToDelete, setIdToDelete] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8000/bd/${idToDelete}`, {
        method: 'DELETE',
      });
      if (response.status === 200) {
        console.log('Data deleted successfully');
      } else {
        console.error('Failed to delete data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="text" name="id" placeholder="ID a eliminar" onChange={(e) => setIdToDelete(e.target.value)} />
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default DeleteData;
