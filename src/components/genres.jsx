import React, { Component } from "react";
import PropTypes, { array } from "prop-types";

const Genres = (props) => {
	const { genres, currentGenre, onGenreChange } = props;

	return (
		<ul className="list-group">
			{Object.values(genres).map((g) => (
				<li
					key={g.id}
					className={
						g.name == currentGenre
							? "list-group-item active"
							: "list-group-item"
					}
					onGenreChange={onGenreChange}>
					{g.name}
				</li>
			))}
		</ul>
	);
};

Genres.propTypes = {
	genres: array.isRequired,
	currentGenre: PropTypes.string.isRequired,
	onGenreChange: PropTypes.func.isRequired,
};

export default Genres;
