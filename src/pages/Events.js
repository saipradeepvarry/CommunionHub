import { useState } from "react";
import EventList from "../components/EventList";
import EventForm from "../components/EventForm";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Community Prayer", date: "2025-03-20", category: "Religious", location: "Church Hall", description: "Join us for a peaceful prayer meeting." },
    { id: 2, title: "Charity Drive", date: "2025-03-25", category: "Charity", location: "Town Center", description: "Helping those in need through donations and support." },
    { id: 3, title: "Social Meetup", date: "2025-03-22", category: "Social", location: "City Park", description: "A gathering to meet new people and network." },
  ]);

  const [filter, setFilter] = useState("All");

  const addEvent = (newEvent) => {
    setEvents([...events, { id: events.length + 1, ...newEvent }]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const filteredEvents = filter === "All" ? events : events.filter((event) => event.category === filter);

  return (
    <div className="events">
      <h2>Upcoming Events</h2>

      <EventForm addEvent={addEvent} />

      <div className="filter-container">
        <label>Filter by Category:</label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">Show All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      <EventList events={filteredEvents} deleteEvent={deleteEvent} />
    </div>
  );
};

export default Events;
