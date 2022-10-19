import React from "react";
import { chair } from "../../assets";
import { Copywrite, DashboardTemplate, Key } from "../../components";
import "./api.scss";

function Api() {
	return (
		<div className="api">
			<DashboardTemplate>
				<div className="template mt-4 mr-8">
					<div className="api-container">
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
						<div className="key mt-5 px-6 py-6">
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
					<div className="footer mt-4">
						<Copywrite />
					</div>
				</div>
			</DashboardTemplate>
		</div>
	);
}

export default Api;
