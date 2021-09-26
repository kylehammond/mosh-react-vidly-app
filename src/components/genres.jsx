import React from "react";
import PropTypes, { array } from "prop-types";

const ListGroup = (props) => {
	const { items, currentItem, onClick } = props;

	return (
		<ul className="list-group">
			{Object.values(items).map((g) => (
				<li key={g._id}>
					<a
						href="#"
						className={
							g.name === currentItem
								? "list-group-item active"
								: "list-group-item"
						}
						onClick={onClick}>
						{g.name}
					</a>
				</li>
			))}
		</ul>
	);
};

ListGroup.propTypes = {
	genres: array.isRequired,
	currentGenre: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default ListGroup;
