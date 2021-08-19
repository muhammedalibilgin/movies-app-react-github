import React from "react";

const Movies = (props) => {
      return (
            <div className="row">
                  {/* {console.log(props.movieprop)} */}
                  {/* {console.log(Object.entries(props.genresprop))} */}

                  {props.movieprop.map((mov) => (
                        <div className="col-md-4" key={mov.id}>
                              <div className="card mb-4">
                                    {/* {`${console.log(mov.genre_ids)}`} */}

                                    {/* <img src={mov.poster} alt="sample movie" /> */}

                                    <div className="card bg-dark text-white">
                                          <div className="card-blur">
                                                <img
                                                      src={`https://www.themoviedb.org/t/p/w1280/${mov.poster_path}`}
                                                      className="card-img"
                                                      alt="movie about"
                                                />
                                          </div>
                                          <div className="card-img-overlay word-wrap-1">
                                                <h3 className="card-title">{mov.title}</h3>
                                                <p className="card-text">{mov.overview}</p>
                                                <p className="card-text">
                                                      {Object.entries(props.genresprop).map(([key, value]) => {
                                                            let result1 = mov.genre_ids.map((x) => (x === value.id ? "#" + value.name + " " : null));
                                                            return result1;
                                                      })}
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  ))}
            </div>
      );
};

export default Movies;
