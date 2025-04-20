import React, { useState } from 'react';
import api from '../Services/api';
import { useNavigate } from 'react-router-dom';

function AudioUpload() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: 'From AI', // these could be filled later by Python
      phone: '',
      email: '',
      product: '',
      status: 'Pending',
      type: '',
      callTime: '',
      audioText: text,
    };

    api.post('/complaints', data)
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <label className="block font-bold mb-2">Paste Email Text or Transcribed Audio:</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-40 border p-2"
        placeholder="Enter complaint details here..."
      />
      <button type="submit" className="mt-4 bg-green-600 text-white p-2">Submit</button>
    </form>
  );
}

export default AudioUpload;
