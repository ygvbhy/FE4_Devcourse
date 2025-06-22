import Image from "next/image";
import MovieList from "@/components/movie/MovieList";
const Home = () => {
  return (
    <>
      <nav className="navigator">
        <ul className="navigator-list">
          <li className="navigator-list__item">
            <Image
              src="/icons/home.png"
              alt=""
              className="navigator-list__icon"
              width={24}
              height={24}
            />
            <strong className="navigator-list__txt">메인</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              src="/icons/live.png"
              alt=""
              className="navigator-list__icon"
              width={24}
              height={24}
            />
            <strong className="navigator-list__txt">상영중</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              src="/icons/popluar.png"
              alt=""
              className="navigator-list__icon"
              width={24}
              height={24}
            />
            <strong className="navigator-list__txt">인기작</strong>
          </li>

          <li className="navigator-list__item">
            <Image
              src="/icons/video.png"
              alt=""
              className="navigator-list__icon"
              width={24}
              height={24}
            />
            <strong className="navigator-list__txt">개봉예정</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              src="/icons/search.png"
              alt=""
              className="navigator-list__icon"
              width={24}
              height={24}
            />
            <strong className="navigator-list__txt">검색</strong>
          </li>
        </ul>
      </nav>
      <section className="search-box">
        <div className="search-input">
          <div className="search-wrap">
            <button>x</button>
            <input
              type="text"
              placeholder="영화 제목을 입력하세요"
              autoComplete="off"
            />
            <span className="material-symbols-outlined icon"> search </span>
          </div>
        </div>
      </section>
      <section className="release">
        <div
          className="release-item"
          style={{
            backgroundImage:
              "url('https://image.tmdb.org/t/p/w500//t5zCBSB5xMDKcDqe91qahCOUYVV.jpg')",
          }}
        >
          <div className="release__text">
            <strong className="release__category">NEW RELEASE</strong>
            <h2 className="release__title">Soviet : The Cold War</h2>
            <p className="release__desc">
              Her senses grow sharper, her thinking clearer, and for the first
              time in her life she feels herself fully in control. By the age of
              sixteen, she&apos;s competing for the U.S.
            </p>
            <button className="release__btn">자세히보기</button>
          </div>
        </div>
      </section>
      <section className="movie">
        <h3 className="movie-category">Now Movies</h3>
        <h4 className="movie-subtext">
          상영중인 영화 <a href="#">더보기</a>
        </h4>
        <MovieList />
      </section>
      <section className="movie">
        <h3 className="movie-category">Now Popular</h3>
        <h4 className="movie-subtext">
          인기있는 영화 <a href="#">더보기</a>
        </h4>
        <MovieList />
      </section>
      <section className="movie">
        <h3 className="movie-category">UP Comming</h3>
        <h4 className="movie-subtext">
          개봉예정 영화 <a href="#">더보기</a>
        </h4>
        <MovieList />
      </section>
      <section className="movie">
        <h3 className="movie-category">TOP Rated</h3>
        <h4 className="movie-subtext">
          높은 평점을 받은 영화 <a href="#">더보기</a>
        </h4>
        <MovieList />
      </section>
    </>
  );
};
export default Home;
