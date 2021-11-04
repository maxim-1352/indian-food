import "./Quote.scss";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Social from "./Social";

const Quote = () => {
  return (
    <div className="quote">
      <div className="wrap">
        <div className="item">
          <div className="q">
            <FormatQuoteIcon />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima a
            excepturi dicta at porro quisquam maxime officia repellendus ab
            odit.
          </p>
          <span>Linda Steward</span>
        </div>
      </div>
      <Social />
    </div>
  );
};

export default Quote;
