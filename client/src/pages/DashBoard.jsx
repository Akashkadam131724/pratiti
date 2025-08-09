export default function Dashboard() {
  return (
    <section className="page dashboard">
      <button>Generate New Content</button>
      <h3>Content History</h3>
      <div className="history-item">
        Blog Post – best foods <span>5 hours ago</span>
      </div>
      <div className="history-item">
        Email <span>1 day ago</span>
      </div>
    </section>
  );
}
