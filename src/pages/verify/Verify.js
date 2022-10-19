import React from "react";
import { Link } from "react-router-dom";
import { verify } from "../../assets";
import { SubmitBtn } from "../../components";
import UserLayout from "../../components/user-layout/UserLayout";
import "./verify.scss";

function Verify() {
	return (
		<div className="verify">
			<UserLayout background={verify}>
				<div className="login-container">
					<div className="login-form">
						<h1>Two Step Verification 💬</h1>
						<p className="mt-4">
							We sent a verification code to your mobile. Enter the code from
							the mobile in the field below.
						</p>
						<p className="mt-4 auth-verify">******0789</p>
						<form action="/">
							<div className="form-flex flex items-center justify-between flex-wrap gap-6">
								<div className="input-field">
									<label htmlFor="pass">Type your 6 digit security code</label>
									<div className="flex-input flex items-center gap-6 mt-4">
										<input type="number" placeholder="" required />
										<input type="number" placeholder="" required />
										<input type="number" placeholder="" required />
										<input type="number" placeholder="" required />
										<input type="number" placeholder="" required />
										<input type="number" placeholder="" required />
									</div>
								</div>
								<div className="btn mt-1 w-full">
									<SubmitBtn text="Verify my account" />
								</div>
							</div>
						</form>
						<Link to="/login">
							<div className="back-flex flex items-center justify-center gap-2 mt-3">
								Didn’t get the code?
								<Link to="/">Resend</Link>
								<small>or</small>
								<Link to="/">Call Us</Link>
							</div>
						</Link>
					</div>
				</div>
			</UserLayout>
		</div>
	);
}

export default Verify;
