import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="text-center text-muted py-2">
      <small>
        &copy; {new Date().getFullYear()} — Made with <CiHeart size={25} className="text-tertiary"/> by Me
      </small>
    </footer>
  );
};

export default Footer;
