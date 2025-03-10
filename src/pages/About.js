import "./About.css";

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About CommunionHub 🌍</h1>
        <p>
          Bringing communities together through faith, social impact, and shared interests.  
          Explore events, engage with people, and make a difference!
        </p>
      </section>

      <section className="about-content">
        <div className="mission">
          <h2>🎯 Our Mission</h2>
          <p>
            Our goal is to create a <strong>unified space</strong> where individuals from different backgrounds  
            can come together to <strong>connect, celebrate, and contribute</strong> to society.  
            We strive to foster <strong>stronger communities</strong> through meaningful interactions.
          </p>
        </div>

        <div className="features">
          <h2>💡 What We Offer</h2>
          <ul>
            <li>📅 <strong>Event Listings</strong> – Find and participate in <strong>religious, social, and charity events</strong>.</li>
            <li>📢 <strong>Event Creation</strong> – Organize your own events and invite others to join.</li>
            <li>🌍 <strong>Community Engagement</strong> – Interact with people who share your values and interests.</li>
            <li>🚀 <strong>Seamless Experience</strong> – A user-friendly platform for event management and participation.</li>
          </ul>
        </div>

        <div className="why-us">
          <h2>🤝 Why Choose Us?</h2>
          <p>
            Unlike generic event platforms, <strong>CommunionHub</strong> focuses on <strong>faith, community, and meaningful impact</strong>.  
            Whether you're looking for a <strong>spiritual retreat, charity drive, or social gathering</strong>,  
            we've got something for everyone!
          </p>
        </div>
      </section>

      <section className="cta">
        <h2>🌟 Join Us Today!</h2>
        <p>Be part of a thriving community that believes in togetherness and growth.</p>
        <button onClick={() => window.location.href = "/events"}>Explore Events 🚀</button>
      </section>
    </div>
  );
};

export default About;
