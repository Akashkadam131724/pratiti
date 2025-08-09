import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

export default function Generate() {
  const [contentGoal, setContentGoal] = useState("");
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState("");
  const [language, setLanguage] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate(); // ✅ initialize navigate

  const validateForm = () => {
    const newErrors = {};
    if (!contentGoal.trim())
      newErrors.contentGoal = "Content type is required.";
    if (!topic.trim()) newErrors.topic = "Topic is required.";
    if (!tone.trim()) newErrors.tone = "Tone is required.";
    if (!language.trim()) newErrors.language = "Language is required.";
    return newErrors;
  };

  const handleGenerate = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setErrors({});

    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/content/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content_goal: contentGoal,
            pick_tone: tone,
            language,
            topic,
            keywords,
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Content saved successfully!");

        // ✅ Redirect after short delay
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      setMessage(`❌ Error: ${err.message}`);
    }
  };

  return (
    <section className="page generate">
      <h2>Generate New Content</h2>

      <label>Select Content Type:</label>
      <select
        value={contentGoal}
        onChange={(e) => setContentGoal(e.target.value)}
      >
        <option value="">-- Select --</option>
        <option>Blog</option>
        <option>Instagram Caption</option>
        <option>Email</option>
        <option>Product Description</option>
      </select>
      {errors.contentGoal && (
        <span className="error">{errors.contentGoal}</span>
      )}

      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      {errors.topic && <span className="error">{errors.topic}</span>}

      <input
        type="text"
        placeholder="Keywords (optional)"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />

      <label>Select Tone:</label>
      <select value={tone} onChange={(e) => setTone(e.target.value)}>
        <option value="">-- Select --</option>
        <option>Friendly</option>
        <option>Professional</option>
        <option>Witty</option>
      </select>
      {errors.tone && <span className="error">{errors.tone}</span>}

      <label>Select Language:</label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="">-- Select --</option>
        <option>English</option>
        <option>Hindi</option>
        <option>Marathi</option>
      </select>
      {errors.language && <span className="error">{errors.language}</span>}

      <button onClick={handleGenerate}>Generate</button>
      {message && <p className="status">{message}</p>}
    </section>
  );
}
