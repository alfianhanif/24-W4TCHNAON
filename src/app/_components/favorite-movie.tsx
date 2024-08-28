"use client";
import { api } from "~/trpc/react";
import React from "react";

export function FavoriteMovies({ id }) {
  const data = api.movie.getFavorite.useQuery({ userId: id });
  const movie = data.data;
  return (
    <>
      <div className="mt-4 grid grid-cols-5 gap-4 bg-white p-4">
        {movie?.map((val) => {
          const url_route = "movie-details/" + val.movieId;
          return (
            <div className="rounded-lg bg-white shadow-md hover:scale-105">
              <a href={url_route}>
                <div
                  className="h-72 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${val.poster})` }}
                ></div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
