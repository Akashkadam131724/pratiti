export default function Generate() {
  return (
    <section className="page generate">
      <h2>Generate New Content</h2>
      <label>Select Content Type:</label>
      <select>
        <option>Blog</option>
        <option>Instagram Caption</option>
        <option>Email</option>
        <option>Product Description</option>
      </select>
      <input type="text" placeholder="Topic" />
      <input type="text" placeholder="Keywords (optional)" />
      <select>
        <option>Friendly</option>
        <option>Professional</option>
        <option>Witty</option>
      </select>
      <button>Generate</button>
    </section>
  );
}
