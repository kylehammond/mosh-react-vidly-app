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
						<tr>
							<th>Title</th>
							<th>Genre</th>
							<th>Stock</th>
							<th>Rate</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.state.movies.map((movie) => (
							<tr key={movie._id}>
								<td>{movie.title}</td>
								<td>{movie.genre.name}</td>
								<td>{movie.numberInStock}</td>
								<td>{movie.dailyRentalRate}</td>
								<td>
									<button
										onClick={() => this.handleDelete(movie)}
										className="btn btn-danger btn-sm">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>
		);
	}

	handleDelete = (movie) => {
		const movies = this.state.movies.filter((m) => m._id !== movie._id);
		this.setState({ movies });
		console.log(`Delete pressed for id: ${movie.title}`);
	};
}

export default Movies;
