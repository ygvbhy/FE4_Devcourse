"use client";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  let titleList = ["상영중", "인기작", "개봉예정"];

  if (pathname.includes("detail")) {
    titleList = ["홈", "카테고리", "Movie", "Tv"];
  }

  return (
    <header className="header">
      <a href="#">
        <h1 className="header__logo">Wave</h1>
      </a>
      <ul className="header__navi">
        {titleList.map((title, index) => (
          <li key={index}>
            <a href="#">{title}</a>
          </li>
        ))}
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
