import "./Form.css";
import { useEffect, useState } from "react";
import tick from "../../assets/img/tickSvg.svg";
import cross from "../../assets/img/crossSvg.svg";

export default function Form(props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    reason: "",
    cv: "",
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
    reason: false,
    cv: false,
    form: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    checkError(e.target.name, e.target.value === "");
  };

  const checkError = (target, value) => {
    let errors = { ...error };

    errors[target] = value;

    errors.form = Object.values(errors).some((value) => value === true);

    setError(errors);
  };

  return (
    <form className="form">
      <label htmlFor="name">Name Surname</label>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {error.name && (
          <div className="error-div">
            <span>Please fill the name</span>
            <img
              height={32}
              width={32}
              src={cross}
              alt="cross"
              className="icon"
              id="form-cross"
            />
          </div>
        )}
        {!error.name && form.name && (
          <div className="valid-div">
            <span>Looks good!</span>
            <img
              height={32}
              width={32}
              src={tick}
              alt="tick"
              className="icon"
              id="form-tick"
              style={{ justifySelf: "end" }}
            />
          </div>
        )}
      </div>
      <label htmlFor="email">Email</label>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {error.email && (
          <div className="error-div">
            <span>Please fill the email</span>
            <img
              height={32}
              width={32}
              src={cross}
              alt="cross"
              className="icon"
              id="form-cross"
            />
          </div>
        )}
        {!error.email && form.email && (
          <div className="valid-div">
            <span>Looks good!</span>
            <img
              height={32}
              width={32}
              src={tick}
              alt="tick"
              className="icon"
              id="form-tick"
              style={{ justifySelf: "end" }}
            />
          </div>
        )}
      </div>
      <label htmlFor="phone">Phone</label>
      <div>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        {error.phone && (
          <div className="error-div">
            <span>Please fill the phone</span>
            <img
              height={32}
              width={32}
              src={cross}
              alt="cross"
              className="icon"
              id="form-cross"
            />
          </div>
        )}
        {!error.phone && form.phone && (
          <div className="valid-div">
            <span>Looks good!</span>
            <img
              height={32}
              width={32}
              src={tick}
              alt="tick"
              className="icon"
              id="form-tick"
              style={{ justifySelf: "end" }}
            />
          </div>
        )}
      </div>
      <label htmlFor="message">Message</label>
      <div>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
        ></textarea>
        {error.message && (
          <div className="error-div">
            <span>Please fill the message</span>
            <img
              height={32}
              width={32}
              src={cross}
              alt="cross"
              className="icon"
              id="form-cross"
            />
          </div>
        )}
        {!error.message && form.message && (
          <div className="valid-div">
            <span>Looks good!</span>
            <img
              height={32}
              width={32}
              src={tick}
              alt="tick"
              className="icon"
              id="form-tick"
              style={{ justifySelf: "end" }}
            />
          </div>
        )}
      </div>
      {props.type === "career" && (
        <>
          <label htmlFor="reason">Position</label>
          <div>
            <select
              id="reason"
              name="reason"
              value={form.reason}
              onChange={handleChange}
            >
              <option value="">Select Reason</option>
              <option value="question">Some Position</option>
              <option value="feedback">General Application</option>
            </select>

            {error.reason && (
              <div className="error-div">
                <span>Please select the position</span>
                <img
                  height={32}
                  width={32}
                  src={cross}
                  alt="cross"
                  className="icon"
                  id="form-cross"
                />
              </div>
            )}
            {!error.reason && form.reason && (
              <div className="valid-div">
                <span>Looks good!</span>
                <img
                  height={32}
                  width={32}
                  src={tick}
                  alt="tick"
                  className="icon"
                  id="form-tick"
                  style={{ justifySelf: "end" }}
                />
              </div>
            )}
          </div>
          <label htmlFor="cv">CV</label>
          <div>
            <input
              type="file"
              id="cv"
              name="cv"
              value={form.cv}
              onChange={handleChange}
            />
            {error.cv && (
              <div className="error-div">
                <span>Please submit the cv</span>
                <img
                  height={32}
                  width={32}
                  src={cross}
                  alt="cross"
                  className="icon"
                  id="form-cross"
                />
              </div>
            )}
            {!error.cv && form.cv && (
              <div className="valid-div">
                <span>Looks good!</span>
                <img
                  height={32}
                  width={32}
                  src={tick}
                  alt="tick"
                  className="icon"
                  id="form-tick"
                  style={{ justifySelf: "end" }}
                />
              </div>
            )}
          </div>
        </>
      )}
      {props.type === "contact" && (
        <>
          <label htmlFor="reason">Reason</label>
          <div>
            <select
              id="reason"
              name="reason"
              value={form.reason}
              onChange={handleChange}
            >
              <option value="">Select Reason</option>
              <option value="consultancy">Consultancy</option>
              <option value="question">Question</option>
              <option value="feedback">Feedback</option>
            </select>
            {error.reason && (
              <div className="error-div">
                <span>Please fill the reason</span>
                <img
                  height={32}
                  width={32}
                  src={cross}
                  alt="cross"
                  className="icon"
                  id="form-cross"
                />
              </div>
            )}
            {!error.reason && form.reason && (
              <div className="valid-div">
                <span>Looks good!</span>
                <img
                  height={32}
                  width={32}
                  src={tick}
                  alt="tick"
                  className="icon"
                  id="form-tick"
                  style={{ justifySelf: "end" }}
                />
              </div>
            )}
          </div>
        </>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}
