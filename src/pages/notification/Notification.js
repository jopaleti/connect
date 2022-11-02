import React from "react";
import { Copywrite, DashAccountTemplate } from "../../components";
import "./notification.scss";

function Notification() {
	return (
		<div className="notification">
			<DashAccountTemplate>
				<div className="notification-container mt-5 mr-8 py-4 shadow-sm">
					<div className="notification-header">
						<h1 className="px-4 pb-4">Notifications</h1>
						<hr />
						<p className="p-4">
							We need permission from your browser to show notifications.
							Request permission
						</p>
					</div>
					{/* Table */}
					<div className="tab-container">
						<div className="table">
							<table>
								<thead>
									<tr>
										<th className="info">Type</th>
										<th className="single">✉️ Email</th>
										<th className="single">🖥 Browser</th>
										<th className="single">📱 App</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="info">
											<div>
												<p>New for you</p>
											</div>
										</td>
										<td className="single">
											<input type="checkbox" checked />
										</td>
										<td className="single">
											<input type="checkbox" />
										</td>
										<td className="single">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td className="info">
											<div>
												<p>Account activity</p>
											</div>
										</td>
										<td className="single">
											<input type="checkbox" />
										</td>
										<td className="single">
											<input type="checkbox" checked />
										</td>
										<td className="single">
											<input type="checkbox" checked />
										</td>
									</tr>
									<tr>
										<td className="info">
											<div>
												<p>A new browser used to sign in</p>
											</div>
										</td>
										<td className="single">
											<input type="checkbox" checked />
										</td>
										<td className="single">
											<input type="checkbox" checked />
										</td>
										<td className="single">
											<input type="checkbox" checked />
										</td>
									</tr>
									<tr>
										<td className="info">
											<div>
												<p>A new device is linked</p>
											</div>
										</td>
										<td className="single">
											<input type="checkbox" />
										</td>
										<td className="single">
											<input type="checkbox" checked />
										</td>
										<td className="single">
											<input type="checkbox" />
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="notify-form p-4">
						<p>When should we send you notifications?</p>
						<select name="access" id="access" className="px-4 py-3 mt-4">
							<option value="full access">Full AccessAlways</option>
						</select>
						<div className="mt-6 flex items-center gap-4">
							<button className="px-6 py-2 btn" type="submit">
								Save Changes
							</button>
							<button className="px-6 py-2 discard">Discard</button>
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

export default Notification;
