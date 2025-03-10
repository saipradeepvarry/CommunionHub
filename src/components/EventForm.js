import { useState } from "react";
import "./EventForm.css";

const EventForm = ({ addEvent }) => {
  const [form, setForm] = useState({ title: "", date: "", category: "", location: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.date && form.category && form.location && form.description) {
      addEvent(form);
      setForm({ title: "", date: "", category: "", location: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <h2>Add New Event</h2>

      <input 
        type="text" 
        placeholder="Event Title" 
        value={form.title} 
        onChange={(e) => setForm({ ...form, title: e.target.value })} 
        required 
      />

      <input 
        type="date" 
        value={form.date} 
        onChange={(e) => setForm({ ...form, date: e.target.value })} 
        required 
      />

      <select 
        value={form.category} 
        onChange={(e) => setForm({ ...form, category: e.target.value })} 
        required
      >
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      <input 
        type="text" 
        placeholder="Location" 
        value={form.location} 
        onChange={(e) => setForm({ ...form, location: e.target.value })} 
        required 
      />

      <textarea 
        placeholder="Event Description" 
        value={form.description} 
        onChange={(e) => setForm({ ...form, description: e.target.value })} 
        required
      ></textarea>

      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
