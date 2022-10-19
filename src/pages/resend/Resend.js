import React from "react";
import { Link } from "react-router-dom";
import { resend } from "../../assets";
import { UserLayout, SubmitBtn } from "../../components";
import "./resend.scss";

function Resend() {
	return (
		<div className="resend">
			<UserLayout background={resend}>
				<div className="login-container">
					<div className="login-form">
						<h1>Verify your email ✉️</h1>
						<p className="mt-4">
							Account activation link sent to your email address:
							hello@pixinvent.com Please follow the link inside to continue.
						</p>
						<form action="/">
							<div className="form-flex flex items-center justify-between flex-wrap gap-6">
								<div className="btn mt-1 w-full">
									<SubmitBtn text="Skip for now" />
								</div>
							</div>
						</form>
						<Link to="/login">
							<div className="back-flex flex items-center justify-center gap-2 mt-3">
								Didn't receive an email?
								<a href="/">Resend</a>
							</div>
						</Link>
					</div>
				</div>
			</UserLayout>
		</div>
	);
}

export default Resend;
