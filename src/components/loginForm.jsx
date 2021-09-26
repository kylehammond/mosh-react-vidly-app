import React, { Component } from "react";

class LoginForm extends React.Component {
	render() {
		return (
			<div>
				<h1>Login</h1>
				<form action="">
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input id="username" type="text" className="form-control" />
					</div>
				</form>
				<form action="">
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input id="password" type="text" className="form-control" />
					</div>
				</form>
				<button className="btn btn-primary">Login</button>
			</div>
		);
	}
}

export default LoginForm;
