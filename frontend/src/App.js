import React, { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3001/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    alert('Message submitted!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} /><br />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br />
      <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange}></textarea><br />
      <button type="submit">Submit</button>
    </form>
  );
}
