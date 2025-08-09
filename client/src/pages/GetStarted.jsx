export default function GetStarted() {
  return (
    <section className="page get-started">
      <h2>Let's get you started!</h2>
      <div>
        <h4>Choose content goal:</h4>
        <button style={{ color: "#555" }}>Blog Post</button>
        <button style={{ color: "#555" }}>Instagram Caption</button>
        <button style={{ color: "#555" }}>Email Newsletter</button>
        <button style={{ color: "#555" }}>Product Description</button>
      </div>
      <div>
        <h4>Pick tone:</h4>
        <label>
          <input type="radio" name="tone" /> Friendly
        </label>
        <label>
          <input type="radio" name="tone" /> Professional
        </label>
        <label>
          <input type="radio" name="tone" /> Witty
        </label>
      </div>
      <div>
        <h4>Choose language:</h4>
        <label>
          <input type="radio" name="lang" /> English
        </label>
        <label>
          <input type="radio" name="lang" /> Hindi
        </label>
        <label>
          <input type="radio" name="lang" /> Marathi
        </label>
      </div>
      <button style={{ color: "#555" }}>Continue</button>
    </section>
  );
}
