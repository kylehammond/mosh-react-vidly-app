import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
	state = {
		movies: getMovies(),
	};

	render() {
		const count = this.state.movies.length;

		return (
			<main className="container">
				<div className="m-2">
					{count > 0
						? "Showing " + count + " movies in the database."
						: "There are no movies."}
				</div>

				<table className="table">
					<thead>
						<tr className="h4">
							<td>Title</td>
							<td>Genre</td>
							<td>Stock</td>
							<td>Rate</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						{this.state.movies.map((movie) => (
							<tr key={movie._id}>
								<td key="{movie._id}_title">{movie.title}</td>
								<td key="{movie._id}_genre">{movie.genre.name}</td>
								<td key="{movie._id}_stock">{movie.numberInStock}</td>
								<td key="{movie._id}_rate">{movie.dailyRentalRate}</td>
								<td>
									<button className="btn btn-danger">Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>
		);
	}
}

export default Movies;
