import "./Feedback.css";
import { useState } from "react";
import { sendFeedback } from "../services/api";

const StarRating = ({ rating, setRating, error, clearError }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating-wrapper">
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hover || rating) ? "filled" : ""}`}
            onClick={() => {
              setRating(star);
              clearError();
            }}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        ))}
      </div>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
};


export default function Feedback() {
  const [form, setForm] = useState({
    name: "",
    rating: 0,
    message: ""
  });

  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (form.rating === 0) {
      setError("Please select a rating ⭐");
      return;
    }

    try {
      await sendFeedback(form);
      alert("Thank you for your feedback!");
      setForm({ name: "", rating: 0, message: "" });
      setError("");
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="feedback" className="feedback-section reveal">
      <h2 className="section-title">Feedback</h2>

      <form className="feedback-form" onSubmit={submit}>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <StarRating
          rating={form.rating}
          setRating={(value) => setForm({ ...form, rating: value })}
          error={error}
          clearError={() => setError("")}
        />

        <textarea
          placeholder="Your Feedback"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button type="submit">
          <span>Send Feedback</span>
        </button>
      </form>
    </section>
  );
}
