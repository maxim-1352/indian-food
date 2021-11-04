import { useState } from "react";
import "./Booking.scss";

const Booking = () => {
  const [value, setValue] = useState(2);
  const changeValue = (e) => {
    setValue(e.target.value);
  };
  const [valueDate, setValueDate] = useState("2021-07-22");
  const changeValueDate = (e) => {
    setValueDate(e.target.value);
  };
  const [valueClock, setValueClock] = useState("10:00");
  const changeValueClock = (e) => {
    setValueClock(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("An order was submitted");
  };
  return (
    <div className="booking">
      <div className="wrapper">
        <div className="wrap-form">
          <h2>Book here</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="wrap">
              <div className="name">
                <label htmlFor="people">How many people?</label>
                <select
                  name="people"
                  id="people"
                  required
                  value={value}
                  onChange={changeValue}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="date">
                <label htmlFor="date">When is your date?</label>
                <input
                  type="date"
                  name=""
                  id="date"
                  value={valueDate}
                  min="2021-01-01"
                  max="2025-12-31"
                  required
                  onChange={changeValueDate}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  name=""
                  id="email"
                  required
                />
              </div>
              <div className="time">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  value={valueClock}
                  placeholder="10:00am"
                  name=""
                  id="time"
                  min="09:00"
                  max="18:00"
                  required
                  onChange={changeValueClock}
                />
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  placeholder="Your phone"
                  name=""
                  id="phone"
                  required
                />
              </div>
            </div>

            <button className="btn-sub" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
