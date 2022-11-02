import React from "react";
import { chair, chrome } from "../../assets";
import { Copywrite, DashAccountTemplate, Key } from "../../components";
import "./security.scss";

function Security() {
	return (
		<div className="security">
			<DashAccountTemplate>
				<div className="profile-acc mt-5 py-6">
					<h1 className="pl-6 pb-6">Profile Details</h1>
					<hr />
					<div className="form-container px-6 mt-6">
						<form>
							<div className="form-flex flex items-center justify-between flex-wrap gap-6">
								<div className="input-pass">
									<label htmlFor="username">Current password</label>
									<input type="password" placeholder="Enter current password" />
								</div>
								<div className="input-field">
									<label htmlFor="username">New password</label>
									<input type="password" placeholder="Enter new password" />
								</div>
								<div className="input-field">
									<label htmlFor="username">Confirm new password</label>
									<input
										type="password"
										placeholder="Confirm your new password"
									/>
								</div>
							</div>
							<div className="form-bottom mt-5">
								<h1>Password requirements:</h1>
								<div className="content">
									<div>
										<ul className="my-2">
											<li>Minimum 8 characters long - the more, the better</li>
											<li>At least one lowercase character</li>
											<li>
												At least one number, symbol, or whitespace character
											</li>
										</ul>
									</div>
									<div className="flex items-center gap-3 mt-4">
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
				<div className="verification mt-5 py-6">
					<h1 className="pl-6 pb-6">Two-step verification</h1>
					<hr />
					<div className="ver-inside px-6 mt-5">
						<h5>Two factor authentication is not enabled yet.</h5>
						<p className="mt-4">
							Two-factor authentication adds an additional layer of security to
							your account by requiring
							<br /> more than just a password to log in. Learn more.
						</p>
						<div className="mt-6">
							<a href="/" className="px-6 py-3">
								Enable two-factor authentication
							</a>
						</div>
					</div>
				</div>
				<div className="api-container mt-6">
					<div className="flex-container flex items-end justify-between">
						<div className="item-left p-8">
							<h1>Create an API Key</h1>
							<form action="/">
								<div className="left-bottom mt-5">
									<div className="input-field">
										<label htmlFor="prof-link">
											Choose the Api key type you want to create
										</label>
										<select name="access" id="access">
											<option value="Full Access">Full Access</option>
										</select>
										{/* <input type="text" placeholder="johndoe/profile" /> */}
									</div>
									<div className="input-field mt-5">
										<label htmlFor="prof-link">Name the API key</label>
										<input type="text" placeholder="Server Key 1" />
									</div>
									<div className="button-field mt-5">
										<button>Create Key</button>
									</div>
								</div>
							</form>
						</div>
						<div className="item-right h-full">
							<img src={chair} alt="img.jpg" className="h-full" />
						</div>
					</div>
					<div className="key mt-6 px-6 py-6">
						<h1>API Key List & Access</h1>
						<p className="mt-3 pr-10">
							An API key is a simple encrypted string that identifies an
							application without any principal. They are useful for accessing
							public data anonymously, and are used to associate API requests
							with your project for quota and billing.
						</p>
						<div className="mt-4 flex flex-col gap-4">
							<div className="w-full">
								<Key
									server="Server Key 1"
									time="Created on 28 Apr 2020, 18:20 GTM+4:10"
									secret="23eaf7f0-f4f7-495e-8b86-fad3261282ac"
								/>
							</div>
							<div className="w-full">
								<Key
									server="Server Key 1"
									time="Created on 28 Apr 2020, 18:20 GTM+4:10"
									secret="23eaf7f0-f4f7-495e-8b86-fad3261282ac"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="recent mt-5 py-6">
					<h1 className="pl-6 pb-6">Recent devices</h1>
					<hr />
					<div className="recent-inside px-6 mt-5">
						<div className="tab-container">
							<div className="table mt-4">
								<table>
									<thead>
										<tr>
											<th className="info">BROWSER</th>
											<th className="single">DEVICE</th>
											<th className="single">LOCATION</th>
											<th className="single">RECENT ACTIVITY</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="info">
												<div className="flex items-center gap-3">
													<div>
														<img src={chrome} alt="img.jpg" />
													</div>
													<p>Chrome on Windows</p>
												</div>
											</td>
											<td className="single">Dell XPS 15</td>
											<td className="single">United States</td>
											<td className="single">10, Jan 2020 20:07</td>
										</tr>
										<tr>
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
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="footer mt-4">
					<Copywrite />
				</div>
			</DashAccountTemplate>
		</div>
	);
}

export default Security;
