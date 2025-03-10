import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
        <h1>Connecting People Across Faiths & Interests 🌍</h1>
        <p>
          Discover meaningful events, build connections, and be part of a community 
          that shares your values and passions. Whether it’s religious gatherings, 
          charity events, or social activities—find your place here!
        </p>
        <button className="explore-btn" onClick={() => navigate("/events")}>
          Explore Events 🚀
        </button>
      </div>

      <section className="features">
        <div className="feature">
          <h3>📅 Explore & Join Events</h3>
          <p>Find religious, social, and charity events happening near you.</p>
        </div>
        <div className="feature">
          <h3>🤝 Organize Your Own</h3>
          <p>Create and manage events with ease, inviting others to participate.</p>
        </div>
        <div className="feature">
          <h3>🌟 Stay Connected</h3>
          <p>Engage with like-minded individuals and grow your network.</p>
        </div>
      </section>

      <section className="cta">
        <h2>🎉 Start Your Journey Today!</h2>
        <p>Join CommunionHub and take part in enriching events that matter.</p>
        <button className="join-btn" onClick={() => navigate("/events")}>
          Get Started 🚀
        </button>
      </section>
    </div>
  );
};

export default Home;
