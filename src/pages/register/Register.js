import React from "react";
import { Link } from "react-router-dom";
import { register } from "../../assets";
import { FormSocial, SubmitBtn } from "../../components";
import UserLayout from "../../components/user-layout/UserLayout";
import "./register.scss";

function Register() {
	return (
		<div className="register">
			<UserLayout background={register}>
				<div className="login-container">
					<div className="login-form">
						<h1>Start 30 Days Free Trial 😍</h1>
						<p className="mt-4">Make your app management easy and fun!</p>
						<form action="/">
							<div className="form-flex flex items-center justify-between flex-wrap gap-6">
								<div className="input-field">
									<label htmlFor="username">Username</label>
									<input type="text" placeholder="johndoe@gmail.com" required />
								</div>
								<div className="input-field">
									<label htmlFor="username">Email</label>
									<input
										type="email"
										placeholder="johndoe@gmail.com"
										required
									/>
								</div>
								<div className="input-field">
									<div className="label-flex flex items-center justify-between">
										<label htmlFor="password">Password</label>
										<a href="/">Forgot Password?</a>
									</div>
									<input
										type="password"
										placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉"
										required
									/>
								</div>
								<div className="remember">
									<input type="checkbox" id="acc" name="remember" value="" />
									<label for="remember">
										I agree to{" "}
										<a href="/" className="laba">
											privacy policy & terms
										</a>
									</label>
								</div>
								<div className="btn mt-1 w-full">
									<SubmitBtn text="Sign Up" />
								</div>
							</div>
						</form>
						<div className="platform mt-4 justify-center flex items-center gap-2">
							<small>Already have an account?</small>
							<Link to="/login">Sign in instead</Link>
						</div>
						{/* Form-social */}
						<div className="w-full mt-4">
							<FormSocial />
						</div>
					</div>
				</div>
			</UserLayout>
		</div>
	);
}

export default Register;
