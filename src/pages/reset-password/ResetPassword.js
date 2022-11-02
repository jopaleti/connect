import React from "react";
import { Link } from "react-router-dom";
import { reset } from "../../assets";
import { SubmitBtn, UserLayout } from "../../components";
import "./reset-password.scss";

function ResetPassword() {
	return (
		<div className="reset-password">
			<UserLayout background={reset}>
				<div className="login-container">
					<div className="login-form">
						<h1>Reset Password 🔐</h1>
						<p className="mt-4">
							Your new password must be different from previously used passwords
						</p>
						<form action="/">
							<div className="form-flex flex items-center justify-between flex-wrap gap-6">
								<div className="input-field">
									<label htmlFor="pass">New Password</label>
									<input type="password" placeholder="Password" required />
								</div>
								<div className="input-field">
									<label htmlFor="pass">Confirm Password</label>
									<input type="password" placeholder="Password" required />
								</div>
								<div className="btn mt-1 w-full">
									<SubmitBtn text="Login" />
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

export default ResetPassword;
