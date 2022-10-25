import React from "react";
import {
	aira,
	airb,
	aire,
	chrome,
	circle,
	radc,
	radu,
	sin,
	vis,
	visac,
	visal,
} from "../../assets";
import { DashAccountTemplate } from "../../components";
import "./plan.scss";

function Plan() {
	return (
		<div className="plan">
			<DashAccountTemplate>
				<div className="mt-4 mr-8 plan-container">
					<div className="curr-plan">
						<h1 className="px-6 py-4">Current plan</h1>
						<hr />
						<div className="curr-flex flex items-start justify-between mt-4 px-6">
							<div className="item-left pb-6">
								<div className="mb-6">
									<h1>Your Current Plan is Basic</h1>
									<p className="mt-1">A simple start for everyone</p>
								</div>
								<div className="mb-6">
									<h1>Active until Dec 09, 2021</h1>
									<p className="mt-1">
										We will send you a notification upon Subscription expiration
									</p>
								</div>
								<div className="mb-6">
									<div className="flex items-center gap-4">
										<h1>$99 Per Month</h1>
										<span className="px-2">Popular</span>
									</div>
									<p className="mt-1">
										Standard plan for small to medium businesses
									</p>
								</div>
								<div className="curr-btn flex items-center gap-4">
									<button className="px-6 py-2 btn" type="submit">
										Upgrade Plan
									</button>
									<button className="px-6 py-2 discard">
										Cancel Subscription
									</button>
								</div>
							</div>
							<div className="item-right">
								<div className="right-top p-4">
									<h1>We need your attention!</h1>
									<p className="mt-4">your plan requires update</p>
								</div>
								<div className="bar mt-6">
									<div className="mb-2 flex-bar flex items-center justify-between">
										<h1>Days</h1>
										<h1>4 of 30 Days</h1>
									</div>
									<progress id="file" value="85" max="100">
										32%
									</progress>
									<p className="mt-2">
										4 days remaining until your plan requires update
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="payment-container mt-6 pb-6">
						<h1 className="px-6 py-4">Payment Methods</h1>
						<hr />
						{/* Form Field Declaration */}
						<form>
							<div className="payment-flex flex items-start justify-between mt-4 px-6">
								<div className="item-left">
									<div className="flex items-center gap-4">
										<div className="checkbox flex items-center cursor-pointer gap-2">
											{/* <input type="radio" /> */}
											<div>
												<img src={radc} alt="img.jpg" />
											</div>
											<h2>Credit/Debit/ATM Card</h2>
										</div>
										<div className="checkbox flex items-center cursor-pointer gap-2">
											{/* <input type="radio" /> */}
											<div>
												<img src={radu} alt="img.jpg" />
											</div>
											<h2>PayPal account</h2>
										</div>
									</div>
									<div className="mt-6">
										<div className="card-field">
											<label htmlFor="card">Card Number</label>
											<div className="card flex items-center justify-between">
												<input
													type="password"
													placeholder="5637 8172 1290"
													required
												/>
												<div className="eye">
													<img src={vis} alt="img.jpg" />
												</div>
											</div>
										</div>
										<div className="flex-card mt-6 flex items-center justify-between flex-wrap">
											<div className="input-field field1">
												<label htmlFor="username">Name On Card</label>
												<input type="email" placeholder="John Doe" required />
											</div>
											<div className="input-field field2">
												<label htmlFor="username">Expiration Date</label>
												<input type="email" placeholder="MM/YY" required />
											</div>
											<div className="input-field field3">
												<label htmlFor="username">CVV</label>
												<input type="email" placeholder="CVV" required />
											</div>
										</div>
										<div className="pay-save mt-4 flex items-center">
											<h3>Save Card for futcher billing?</h3>
										</div>
										<div className="form-submit-field">
											<div className="flex items-center gap-3 mt-6">
												<button type="submit" className="px-6 py-2 save">
													Save Changes
												</button>
												<button type="submit" className="px-6 py-2 discard">
													Discard
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="item-right">
									<h1>My Cards</h1>
									<div className="card-info mt-6 px-4 py-4">
										<div className="verve-flex flex justify-between items-center">
											<img src={visac} alt="img.jpg" />
											<div className="edit-btn flex items-center gap-4">
												<div className="btn active">
													<button className="px-6 py-2">Edit</button>
												</div>
												<div className="btn">
													<button className="px-6 py-2">Delete</button>
												</div>
											</div>
										</div>
										<div className="name-flex flex items-center gap-4 mt-2">
											<h2>Tom McBride</h2>
											<p className="px-2">Primary</p>
										</div>
										<div className="number-flex flex justify-between mt-2">
											<p>**** **** 9865</p>
											<h3>Card expires at 02/24</h3>
										</div>
									</div>
									<div className="card-info mt-4 px-4 py-4">
										<div className="verve-flex flex justify-between items-center">
											<img src={visal} alt="img.jpg" />
											<div className="edit-btn flex items-center gap-4">
												<div className="btn active">
													<button className="px-6 py-2">Edit</button>
												</div>
												<div className="btn">
													<button className="px-6 py-2">Delete</button>
												</div>
											</div>
										</div>
										<div className="name-flex">
											<h2>Mildred Wagner</h2>
										</div>
										<div className="number-flex flex justify-between mt-2">
											<p>**** **** 9865</p>
											<h3>Card expires at 02/24</h3>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className="bill-addr mt-6 pb-6">
						<h1 className="px-6 py-4">Current plan</h1>
						<hr />
						{/* Billing Address */}
						<div className="bill-container mt-4 px-6">
							<form>
								<div className="bill-field-flex flex items-start justify-between flex-wrap gap-4">
									<div className="input-field field1">
										<label htmlFor="name">Company Name</label>
										<input type="text" placeholder="PIXINVENT" required />
									</div>
									<div className="input-field field1">
										<label htmlFor="username">Billing Email</label>
										<input
											type="email"
											placeholder="johndeo@gmail.com"
											required
										/>
									</div>
									<div className="input-field field1">
										<label htmlFor="name">Tax ID</label>
										<input type="text" placeholder="Enter Tax ID" required />
									</div>
									<div className="input-field field1">
										<label htmlFor="name">VAT Number</label>
										<input
											type="number"
											placeholder="Enter Vat Number"
											required
										/>
									</div>
									<div className="input-field field1">
										<label htmlFor="name">Mobile</label>
										<input type="number" placeholder="John Doe" required />
									</div>
									<div className="input-field field1">
										<label htmlFor="name">Country</label>
										<select name="country" id="country">
											<option value="UAS">UAS</option>
										</select>
									</div>
									<div className="input-field field-full">
										<label htmlFor="addr">Billing Address</label>
										<input
											type="text"
											placeholder="Enter Billing Address"
											required
										/>
									</div>
									<div className="input-field field1">
										<label htmlFor="state">State</label>
										<input type="text" placeholder="Enter State" required />
									</div>
									<div className="input-field field1">
										<label htmlFor="code">Zip Code</label>
										<input
											type="number"
											placeholder="Enter Zip Code"
											required
										/>
									</div>
									<div className="form-submit-field">
										<div className="flex items-center gap-3 mt-6">
											<button type="submit" className="px-6 py-2 save">
												Save Changes
											</button>
											<button type="submit" className="px-6 py-2 discard">
												Discard
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					{/* Billing History */}
					<div className="bill-history mt-6">
						<div className="history-head flex items-center justify-between px-6 py-4">
							<h1>Billing History</h1>
							<select name="exp" id="exp" className="px-4 py-2">
								{/* <img src={circle} /> */}
								<option value="export">Export</option>
							</select>
						</div>
						<div className="table">
							<table>
								<thead>
									<tr>
										<th className="info">
											<div className="flex items-center justify-between">
												<h2>#</h2>
												<div className="flex flex-col gap-0">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="#5E5873"
														className="w-4 h-4"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M4.5 15.75l7.5-7.5 7.5 7.5"
														/>
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="#B9B9C3"
														className="w-4 h-4"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M19.5 8.25l-7.5 7.5-7.5-7.5"
														/>
													</svg>
												</div>
											</div>
										</th>
										<th className="single">
											<div className="flex items-center justify-between">
												<div>
													<img src={sin} alt="img.jpg" />
												</div>
												<div className="flex flex-col gap-0">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="#5E5873"
														className="w-4 h-4"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M4.5 15.75l7.5-7.5 7.5 7.5"
														/>
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="#B9B9C3"
														className="w-4 h-4"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M19.5 8.25l-7.5 7.5-7.5-7.5"
														/>
													</svg>
												</div>
											</div>
										</th>
										<th className="info">
											<div className="flex items-center justify-between">
												<h2>TOTAL</h2>
												<div className="flex flex-col gap-0">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="#B9B9C3"
														className="w-4 h-4"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M4.5 15.75l7.5-7.5 7.5 7.5"
														/>
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="#B9B9C3"
														className="w-4 h-4"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M19.5 8.25l-7.5 7.5-7.5-7.5"
														/>
													</svg>
												</div>
											</div>
										</th>
										<th className="info">
											<div className="flex items-center justify-between">
												<h2>ISSUED DATE</h2>
												<div className="flex flex-col gap-0">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="#B9B9C3"
														className="w-4 h-4"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M4.5 15.75l7.5-7.5 7.5 7.5"
														/>
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="#B9B9C3"
														className="w-4 h-4"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M19.5 8.25l-7.5 7.5-7.5-7.5"
														/>
													</svg>
												</div>
											</div>
										</th>
										<th className="info">
											<div className="flex items-center justify-between">
												<h2>Due DATE</h2>
												<div className="flex flex-col gap-0">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="#B9B9C3"
														className="w-4 h-4"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M4.5 15.75l7.5-7.5 7.5 7.5"
														/>
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="#B9B9C3"
														className="w-4 h-4"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M19.5 8.25l-7.5 7.5-7.5-7.5"
														/>
													</svg>
												</div>
											</div>
										</th>
										<th className="info">
											<div className="flex items-center justify-between">
												<h2>BALANCE</h2>
												<div className="flex flex-col gap-0">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="#B9B9C3"
														className="w-4 h-4"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M4.5 15.75l7.5-7.5 7.5 7.5"
														/>
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="#B9B9C3"
														className="w-4 h-4"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M19.5 8.25l-7.5 7.5-7.5-7.5"
														/>
													</svg>
												</div>
											</div>
										</th>
										<th className="info text-end">ACTIONS</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="info">
											<h3>#91716</h3>
										</td>
										<td className="single">
											<img src={airb} alt="img.jpg" />
										</td>
										<td className="info">$4598</td>
										<td className="info">09 Feb 2020</td>
										<td className="info">26 Apr 2021</td>
										<td className="info">
											<h4 className="px-3 py-1">Paid</h4>
										</td>
										<td className="info">
											<div className="flex items-center gap-3">
												<img src={aira} alt="img.jpg" />
												<img src={aire} alt="img.jpg" />
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="currentColor"
													className="w-6 h-6"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
													/>
												</svg>
											</div>
										</td>
									</tr>
									{/* <tr>
										<td className="info">
											<div className="flex items-center gap-3">
												<div>
													<img src={chrome} alt="img.jpg" />
												</div>
												<p>Chrome on Android</p>
											</div>
										</td>
										<td className="single">Google Pixel 3a</td>
										<td className="single">Ghana</td>
										<td className="single">11, Jan 2020 10:16</td>
									</tr>
									<tr>
										<td className="info">
											<div className="flex items-center gap-3">
												<div>
													<img src={chrome} alt="img.jpg" />
												</div>
												<p>Chrome on MacOS</p>
											</div>
										</td>
										<td className="single">Apple iMac</td>
										<td className="single">Mayotte</td>
										<td className="single">11, Jan 2020 12:10</td>
									</tr>
									<tr>
										<td className="info">
											<div className="flex items-center gap-3">
												<div>
													<img src={chrome} alt="img.jpg" />
												</div>
												<p>Chrome on iPhone</p>
											</div>
										</td>
										<td className="single">Apple iPhone XR</td>
										<td className="single">Mauritania</td>
										<td className="single">12, Jan 2020 8:29</td>
									</tr> */}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</DashAccountTemplate>
		</div>
	);
}

export default Plan;
