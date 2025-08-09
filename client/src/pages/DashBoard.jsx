import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [contents, setContents] = useState([]);
  const navigate = useNavigate();

  const fetchContents = () => {
    fetch("http://localhost:3000/api/content/get-all-content")
      .then((res) => res.json())
      .then((data) => setContents(data.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchContents();
  }, []);

  const formatTimeAgo = (date) => {
    const diff = (new Date() - new Date(date)) / 1000;
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return `${Math.floor(diff / 86400)} days ago`;
  };

  return (
    <section className="page dashboard" style={{ padding: "20px" }}>
      {/* Top Buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => navigate("/generate")}
          style={{
            background: "#4cafef",
            border: "none",
            padding: "8px 14px",
            borderRadius: "6px",
            cursor: "pointer",
            color: "#fff",
            fontWeight: "500",
          }}
        >
          ➕ Generate New Content
        </button>
        <button
          onClick={fetchContents}
          style={{
            background: "#e0e0e0",
            border: "none",
            padding: "8px 14px",
            borderRadius: "6px",
            cursor: "pointer",
            color: "#333",
            fontWeight: "500",
          }}
        >
          🔄 Refresh
        </button>
      </div>

      <h3 style={{ marginBottom: "15px" }}>📜 Content History</h3>

      {contents.length > 0 ? (
        <div
          style={{
            display: "grid",
            gap: "15px",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {contents.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                background: "#fff",
                boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              }}
            >
              <h4 style={{ margin: "0 0 8px", color: "#333" }}>
                {item.content_goal}
              </h4>
              <p style={{ margin: "4px 0", color: "#555" }}>
                <strong>Topic:</strong> {item.topic || "—"}
              </p>
              <p style={{ margin: "4px 0", color: "#555" }}>
                <strong>Keywords:</strong> {item.keywords || "—"}
              </p>
              <p style={{ margin: "4px 0", color: "#555" }}>
                <strong>Tone:</strong> {item.pick_tone}
              </p>
              <p style={{ margin: "4px 0", color: "#555" }}>
                <strong>Language:</strong> {item.language}
              </p>
              <p
                style={{ marginTop: "10px", fontSize: "0.9em", color: "#888" }}
              >
                ⏳ {formatTimeAgo(item.createdAt)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No content generated yet.</p>
      )}
    </section>
  );
}
