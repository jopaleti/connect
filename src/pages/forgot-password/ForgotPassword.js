import React from "react";
import { Link } from "react-router-dom";
import { forgot } from "../../assets";
import { SubmitBtn, UserLayout } from "../../components";
import "./forgot-password.scss";

function ForgotPassword() {
	return (
		<div className="forgot-password">
			<UserLayout background={forgot}>
				<div className="login-container">
					<div className="login-form">
						<h1>Forgot Password? 🔑</h1>
						<p className="mt-4">
							Enter your email and we'll send you instructions to reset your
							password.
						</p>
						<form action="/">
							<div className="form-flex flex items-center justify-between flex-wrap gap-6">
								<div className="input-field">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										placeholder="johndoe@gmail.com"
										required
									/>
								</div>
								<div className="btn mt-1 w-full">
									<SubmitBtn text="Send reset link" />
								</div>
							</div>
						</form>
						<Link to="/login">
							<div className="back-flex flex items-center justify-center gap-2 mt-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="#7367f0"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 19.5L8.25 12l7.5-7.5"
									/>
								</svg>
								<small>Back to login</small>
							</div>
						</Link>
					</div>
				</div>
			</UserLayout>
		</div>
	);
}

export default ForgotPassword;
