import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
	state = {
		data: { username: "", password: "", name: "" },
		errors: {},
	};

	schema = {
		username: Joi.string().email().required().label("Username"),
		password: Joi.string().min(5).required().label("Password"),
		name: Joi.string().required().label("Name"),
	};

	doSubmit = () => {
		console.log("Register submitted.");
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h1>Register</h1>
					{this.renderInput("username", "Username")}
					{this.renderInput("password", "Password", "password")}
					{this.renderInput("name", "Name")}
					{this.renderButton("Register")}
				</form>
			</div>
		);
	}
}

export default RegisterForm;

// username
// required
// valid email - @ and period

//password
// required
// min 5 char

//name
// required

// register button
// disabled until all valid

// link on navbar
