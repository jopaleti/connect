import React, { useRef } from "react";
import "./account-form.scss";

function AccountForm(props) {
	// UseRef defination
	const pass = useRef();
	const handlePass = () => {
		if (pass.current.type === "password") {
			pass.current.type = "text";
		} else {
			pass.current.type = "password";
		}
	};
	return (
		<div className="account-form">
			<h1 className="acc-header">Account Information</h1>
			<p className="mt-4">Enter your username password details</p>
			<form className="mt-8">
				<div className="form-flex flex items-center justify-between flex-wrap gap-6">
					<div className="input-field">
						<label htmlFor="username">Username</label>
						<input type="text" placeholder="Johndoe" />
					</div>
					<div className="input-field">
						<label htmlFor="username">Email</label>
						<input type="email" placeholder="Johndoe@gmail.com" />
					</div>
					<div className="password-field">
						<label htmlFor="username">Password</label>
						<div className="password flex items-center justify-between">
							<input ref={pass} type="password" placeholder="Password" />
							<div
								className="eye"
								onClick={() => {
									handlePass();
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="#ccc"
									className="w-5 h-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
						</div>
					</div>
					<div className="password-field">
						<label htmlFor="username">Confirm Password</label>
						<div className="password flex items-center justify-between">
							<input
								ref={pass}
								type="password"
								placeholder="Re-type Password"
							/>
							<div
								className="eye"
								onClick={() => {
									handlePass();
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="#ccc"
									className="w-5 h-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
						</div>
					</div>
					{/* Profile Link */}
					<div className="profile-field">
						<div className="input-field">
							<label htmlFor="prof-link">Profile Link</label>
							<input type="text" placeholder="johndoe/profile" />
						</div>
					</div>
					<div className="remember">
						<input type="checkbox" id="acc" name="remember" value="" />
						<label for="remember">Remember me</label>
					</div>
					<div className="submit-btn">
						<button
							onClick={() => {
								props.click();
							}}
							className="px-4 py-2"
						>
							<small>Next</small>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="#fff"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default AccountForm;
