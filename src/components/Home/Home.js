import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./Home.css";

function Home() {
  const [movie, setMovie] = useState([]);
  const genres = [
    {
      id: 1,
      name: "Action",
    },
    { id: 2, name: "Thriller" },
    { id: 3, name: "Drama" },
  ];

  const apiFetch = async () => {
    let config = {
      headers: {
        Authorization: "Bearer " + "Wookie2019",
      },
    };
    const res = await axios.get("https://wookie.codesubmit.io/movies", config);
    console.log(res);
    setMovie(res.data?.movies);
  };

  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <>
      {genres.map((x) => {
        return (
          <>
            <div className="genre">{x.name}</div>
            <div className="movieCard">
              {movie
                .filter((y) => y.genres.includes(x.name))
                .map((item) => {
                  return (
                    <div
                      style={{
                        width: "300px",
                        height: "200px",
                        padding: "20px",
                      }}
                    >
                      <Card img={item.poster} />
                    </div>
                  );
                })}
            </div>
          </>
        );
      })}
    </>
  );
}

export default Home;
