import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GoogleIcon from "@mui/icons-material/Google";

const Social = () => {
  return (
    <div className="social">
      <div className="wrap-icons">
        <a href="/" target="_blank" rel="noopener noreferrer" className="icon">
          <FacebookIcon />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer" className="icon">
          <TwitterIcon />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer" className="icon">
          <InstagramIcon />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer" className="icon">
          <PinterestIcon />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer" className="icon">
          <GoogleIcon />
        </a>
      </div>
    </div>
  );
};

export default Social;
