import React, { Component } from "react";

class Like extends Component {
	getLikedClass = () => {
		const { liked } = this.props;
		const baseClasses = "fa fa-heart";
		return liked ? baseClasses : `${baseClasses}-o`;
	};

	render() {
		// const { liked, onClick } = this.props;
		return (
			<i
				onClick={this.props.onClick}
				style={{ cursor: "pointer" }}
				className={this.getLikedClass()}
				aria-hidden="true"></i>
		);
	}
}

export default Like;

// this threw errors for me but it's what he did
// import React, { Component } from "react";

// const Like = () => {
// 	let classes = "fa fa-heart";
// 	if (!this.props.liked) classes += "-o";
// 	return (
// 		<i
// 			onClick={this.props.onClick}
// 			style={{ cursor: "pointer" }}
// 			className={classes}
// 			area-hidden="true"></i>
// 	);
// };

// export default Like;
