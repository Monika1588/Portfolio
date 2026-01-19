import { useState } from "react";
import { sendFeedback } from "../services/api";

export default function Feedback() {
  const [form, setForm] = useState({
    name: "",
    rating: 5,
    message: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    await sendFeedback(form);
    alert("Thank you for your feedback!");
    setForm({ name: "", rating: 5, message: "" });
  };

  return (
    <section id="feedback" className="feedback-section reveal">
      <h2 className="section-title">Feedback</h2>

      <form className="feedback-form" onSubmit={submit}>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />

        <select
          value={form.rating}
          onChange={e => setForm({ ...form, rating: e.target.value })}
        >
          {[1,2,3,4,5].map(r => (
            <option key={r} value={r}>{r} ⭐</option>
          ))}
        </select>

        <textarea
          placeholder="Your Feedback"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          required
        />

<button type="submit">
  <span>Send Feedback</span>
</button>

      </form>
    </section>
  );
}
