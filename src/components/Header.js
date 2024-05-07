const Header = ({ title, onOpen }) => {
  return (
    <header className="head">
      <h1>{title}</h1>
      <button className="Btn" onClick={onOpen}>
        Add
      </button>
    </header>
  );
};

export default Header;
