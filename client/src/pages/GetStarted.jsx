export default function GetStarted() {
  return (
    <section className="page get-started">
      <h2>Let's get you started!</h2>
      <div>
        <h4>Choose content goal:</h4>
        <button>Blog Post</button>
        <button>Instagram Caption</button>
        <button>Email Newsletter</button>
        <button>Product Description</button>
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
      <button>Continue</button>
    </section>
  );
}
