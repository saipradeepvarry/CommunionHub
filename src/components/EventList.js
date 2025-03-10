import "./EventList.css";

const EventList = ({ events, deleteEvent }) => {
  return (
    <div className="event-list">
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <button className="delete-btn" onClick={() => deleteEvent(event.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p className="no-events">No upcoming events.</p>
      )}
    </div>
  );
};

export default EventList;
