import React from "react";
import { illustrate } from "../../assets";
import { FormSocial, SubmitBtn, UserLayout } from "../../components";
import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
	return (
		<UserLayout background={illustrate}>
			<div className="login-container">
				<div className="login-form">
					<h1>Welcome to Serve! 👋🏻</h1>
					<p className="mt-4">
						Please sign-in to your account and start the adventure
					</p>
					<form action="/">
						<div className="form-flex flex items-center justify-between flex-wrap gap-6">
							<div className="input-field">
								<label htmlFor="username">Email</label>
								<input type="text" placeholder="johndoe@gmail.com" required />
							</div>
							<div className="input-field">
								<div className="label-flex flex items-center justify-between">
									<label htmlFor="password">Password</label>
									<a href="/">Forgot Password?</a>
								</div>
								<input type="password" placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉" required />
							</div>
							<div className="remember">
								<input type="checkbox" id="acc" name="remember" value="" />
								<label for="remember">Remember me</label>
							</div>
							<div className="btn mt-1 w-full">
								<SubmitBtn text="Login" />
							</div>
						</div>
					</form>
					<div className="platform mt-4 justify-center flex items-center gap-2">
						<small>New on our platform?</small>
						<Link to="/login">Create an account</Link>
					</div>
					{/* Form-social */}
					<div className="w-full mt-4">
						<FormSocial />
					</div>
				</div>
			</div>
		</UserLayout>
	);
}

export default Login;
