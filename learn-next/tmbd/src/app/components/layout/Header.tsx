const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <h1 className="header__logo">Wave</h1>
      </a>
      <ul className="header__navi">
        <li>
          <a href="#">상영중</a>
        </li>
        <li>
          <a href="#">인기작</a>
        </li>
        <li>
          <a href="#">개봉예정</a>
        </li>
      </ul>
      <div className="header-search">
        <input
          type="text"
          className="header-search__input"
          placeholder="제목으로 찾아보세요."
        />
        <span className="material-symbols-outlined icon"> search </span>
      </div>
    </header>
  );
};
export default Header;
