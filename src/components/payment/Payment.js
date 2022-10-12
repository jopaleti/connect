import React from "react";
import { visa } from "../../assets";
import "./payment.scss";

function Payment() {
	return (
		<div className="payment">
			<div className="payment-container">
				<h1>Select Plan</h1>
				<p className="mt-4">Select plan as per your retirement</p>
				<div className="plan-flex flex flex-wrap items-center justify-between mt-8">
					<div className="plan-box">
						<h1>Basic</h1>
						<p>A simple start for everyone</p>
						<div className="price flex gap-1 items-center justify-center mt-6">
							<sup>$</sup>
							<h1>0</h1>
							<sub>/ month</sub>
						</div>
					</div>
					<div className="plan-box">
						<h1>Standard</h1>
						<p>For small to medium businesses</p>
						<div className="price flex gap-1 items-center justify-center mt-6">
							<sup>$</sup>
							<h1>99</h1>
							<sub>/ month</sub>
						</div>
					</div>
					<div className="plan-box">
						<h1>Enterprise</h1>
						<p>Solution for big organizations</p>
						<div className="price flex gap-1 items-center justify-center mt-6">
							<sup>$</sup>
							<h1>499</h1>
							<sub>/ month</sub>
						</div>
					</div>
				</div>
				<div className="payInfo-container mt-8">
					<h1>Payment Information</h1>
					<p className="mt-4">Enter your card Information</p>
					<form action="/" className="mt-6">
						<div className="form-container flex items-center justify-between flex-wrap gap-6">
							<div className="card-num">
								<label htmlFor="card-num">Card Number</label>
								<div className="password flex items-center justify-between">
									<input type="number" placeholder="john" />
									<div>
										<img src={visa} alt="img.jpg" />
									</div>
								</div>
							</div>
							<div className="name-field">
								<label htmlFor="username">Name On Card</label>
								<input type="text" placeholder="johndoe" />
							</div>
							<div className="date-field">
								<label htmlFor="username">Expiration Date</label>
								<input type="date" placeholder="MM/YY" />
							</div>
							<div className="cvv-field">
								<label htmlFor="cvv">CVV</label>
								<input type="text" placeholder="CVV" />
							</div>
							<div className="submit-btn">
								<button className="px-4 py-2" type="submit">
									<small>Submit</small>
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
			</div>
		</div>
	);
}

export default Payment;
