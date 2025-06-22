import Image from "next/image";

const MovieList = () => {
  return (
    <div className="movie-list">
      <div className="movie-list__item">
        <a href="#" className="skeleton-list-item ui0">
          {" "}
        </a>
      </div>
      <div className="movie-list__item">
        <a href="#">
          <figure>
            <Image
              src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
              alt=""
              loading="lazy"
              width={300}
              height={450}
            />
          </figure>
          <div className="movie-list__txt">
            <div className="progress-circle p50">
              <span>10%</span>
              <div className="left-half-clipper">
                <div className="first50-bar"></div>
                <div className="value-bar"></div>
              </div>
            </div>
            <strong className="movie-list__title">Civil War</strong>
            <span className="release_date">2023.11.21</span>
          </div>
        </a>
      </div>
      <div className="movie-list__item">
        <a href="#">
          <figure>
            <Image
              src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
              alt=""
              loading="lazy"
              width={300}
              height={450}
            />
          </figure>
          <div className="movie-list__txt">
            <div className="progress-circle p50">
              <span>10%</span>
              <div className="left-half-clipper">
                <div className="first50-bar"></div>
                <div className="value-bar"></div>
              </div>
            </div>
            <strong className="movie-list__title">Civil War</strong>
            <span className="release_date">2023.11.21</span>
          </div>
        </a>
      </div>
      <div className="movie-list__item">
        <a href="#">
          <figure>
            <Image
              src="https://image.tmdb.org/t/p/w500//gqkJSh8pqMdiWwPfRNJGQkuivDi.jpg"
              alt=""
              loading="lazy"
              width={300}
              height={450}
            />
          </figure>
          <div className="movie-list__txt">
            <div className="progress-circle p50">
              <span>10%</span>
              <div className="left-half-clipper">
                <div className="first50-bar"></div>
                <div className="value-bar"></div>
              </div>
            </div>
            <strong className="movie-list__title">Civil War</strong>
            <span className="release_date">2023.11.21</span>
          </div>
        </a>
      </div>
      <div className="movie-list__item">
        <a href="#">
          <figure>
            <Image
              src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
              alt=""
              loading="lazy"
              width={300}
              height={450}
            />
          </figure>
          <div className="movie-list__txt">
            <div className="progress-circle p50">
              <span>10%</span>
              <div className="left-half-clipper">
                <div className="first50-bar"></div>
                <div className="value-bar"></div>
              </div>
            </div>
            <strong className="movie-list__title">Civil War</strong>
            <span className="release_date">2023.11.21</span>
          </div>
        </a>
      </div>
    </div>
  );
};
export default MovieList;
