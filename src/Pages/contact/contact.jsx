export const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault(); // stops page reload
    const formData = new FormData(e.target); // collects data from the form
    const formInputData = Object.fromEntries(formData.entries()); // converts it into a plain JS object
    console.log(formInputData); // see your data like { username: "...", email: "...", message: "..." }
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-control"
            type="text"
            required
            autoComplete="false"
            placeholder="Enter your name"
            name="username"
          />
          <input
            className="form-control"
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
          />

          <textarea
            className="from-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="false"
          ></textarea>

          <button type="submit"> Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
