import "../css/styles.css";

const Header = () => {
  const imagePath = window.location.origin + "/images/bg-header-mobile.svg";

  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${imagePath})`,
      }}
    ></header>
  );
};

export default Header;
